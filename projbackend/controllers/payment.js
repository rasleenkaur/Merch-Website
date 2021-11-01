const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "bx2nwrvy5zkgnthq",
  publicKey: "cng6gpbp7rvxrj8v",
  privateKey: "2e0c0da2dcd09cbe1aa9495c05852b34",
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function (err, response) {
    // pass clientToken to your front-end
    // const clientToken = response.clientToken;
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;
  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true,
      },
    },
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    }
  );
};
