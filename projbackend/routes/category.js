const express = require("express");
const router = express.Router();

const {
  getCategoryById,
  createCategory,
  getcategory,
  getAllcategory,
  updateCategory,
  removeCategory,
} = require("../controllers/category");
const { isAuthenticated, isSignedIn, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { route } = require("./auth");

//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//actual routes goes here

// create routes
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

// read
router.get("/category/:categoryId", getcategory);
router.get("/categories", getAllcategory);

// update
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);

// delete
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);

module.exports = router;
