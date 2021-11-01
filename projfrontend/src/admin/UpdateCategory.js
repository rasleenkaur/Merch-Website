// import React, { useState, useEffect } from "react";
// import Base from "../core/Base";
// import { Link } from "react-router-dom";
// import {
//   getCategory,
//   getCategories,
//   updateCategory,
// } from "./helper/adminapicall";
// import { isAuthenticate } from "../auth/helper/index";

// const UpdateCategory = ({ match }) => {
//   const { user, token } = isAuthenticate();
//   const [values, setValues] = useState({
//     name: "",
//     error: "",
//     getaRedirect: false,
//     createdCategory: "",
//     formData: "",
//   });

//   const { name, error, getaRedirect, createdCategory, formData } = values;

//   const preload = (categoryId) => {
//     getCategory(categoryId).then((data) => {
//       console.log(`In preload category Id -> ${categoryId}`);
//       if (data && data?.error) {
//         setValues({ ...values, error: data?.error });
//       } else {
//         setValues({
//           ...values,
//           name: data?.name,
//           formData: new FormData(),
//         });
//       }
//     });
//   };

//   useEffect(() => {
//     preload(match.params.categoryId);
//   }, []);

//   const onSubmit = (event) => {
//     event.preventDefault();
//     setValues({ ...values, error: "" });

//     updateCategory(match.params.categoryId, user._id, token, formData).then(
//       (data) => {
//         console.log(`useid ${user?._id}`);
//         console.log(`categoryid ${match?.params?.categoryId}`);
//         console.log(`Bearer ${token}`);
//         if (data & data?.error) {
//           setValues({ ...values, error: data?.error });
//         } else {
//           setValues({
//             ...values,
//             name: "",
//             createdCategory: data.name,
//           });
//         }
//         console.log(`name updated: ${name}`);
//         console.log(`createdCategory ${createdCategory}`);
//       }
//     );
//   };

//   const handleChange = (name) => (event) => {
//     const value = name === "photo" ? event.target.files[0] : event.target.value;
//     formData.set(name, value);
//     setValues({ ...values, [name]: value });
//   };

//   const successMessage = () => (
//     <div
//       className="alert alert-success mt-3"
//       style={{ display: createdCategory ? "" : "none" }}
//     >
//       <h4>{createdCategory} Updated successfully</h4>
//     </div>
//   );

//   const warningMessage = () => (
//     <div
//       className="alert alert-danger mt-3"
//       style={{ display: error ? "" : "none" }}
//     >
//       <h4>{error}</h4>
//     </div>
//   );

//   const createCategoryForm = () => (
//     <form>
//       <div className="form-group pt-3">
//         <input
//           onChange={handleChange("name")}
//           name="photo"
//           className="form-control"
//           placeholder="Name"
//           value={name}
//         />
//       </div>
//       <button
//         type="submit"
//         onClick={onSubmit}
//         className="btn btn-outline-success mb-3 mt-3"
//       >
//         Update Category
//       </button>
//     </form>
//   );

//   return (
//     <Base
//       title="Update Category here!"
//       description="Welcome to category creation section"
//       className="container bg-info p-4"
//     >
//       <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
//         Admin Home
//       </Link>
//       <div className="row bg-dark text-white rounded">
//         <div className="col-md-8 offset-md-2">
//           {successMessage()}
//           {warningMessage()}
//           {createCategoryForm()}
//         </div>
//       </div>
//     </Base>
//   );
// };

// export default UpdateCategory;

import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {
  getCategory,
  getCategories,
  updateCategory,
} from "./helper/adminapicall";
import { isAuthenticate } from "../auth/helper/index";

const UpdateCategory = ({ match }) => {
  const { user, token } = isAuthenticate();
  const [values, setValues] = useState({
    name: "",
    error: "",
    getaRedirect: false,
    createdCategory: "",
    formData: "",
  });

  const { name, error, getaRedirect, createdCategory, formData } = values;

  const preload = (categoryId) => {
    getCategory(categoryId).then((data) => {
      console.log(`In preload category Id -> ${categoryId}`);
      if (data && data?.error) {
        setValues({ ...values, error: data?.error });
      } else {
        setValues({
          ...values,
          name: data?.name,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "" });

    updateCategory(match.params.categoryId, user._id, token, formData).then(
      (data) => {
        console.log(`useid ${user?._id}`);
        console.log(`categoryid ${match?.params?.categoryId}`);
        console.log(`Bearer ${token}`);
        if (data & data?.error) {
          setValues({ ...values, error: data?.error });
        } else {
          setValues({
            ...values,
            name: "",
            createdCategory: data.name,
          });
        }
        console.log(`name updated: ${name}`);
        console.log(`createdCategory ${createdCategory}`);
      }
    );
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdCategory ? "" : "none" }}
    >
      <h4>{createdCategory} Updated successfully</h4>
    </div>
  );

  const warningMessage = () => (
    <div
      className="alert alert-danger mt-3"
      style={{ display: error ? "" : "none" }}
    >
      <h4>{error}</h4>
    </div>
  );

  const createCategoryForm = () => (
    <form>
      <div className="form-group pt-3">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3 mt-3"
      >
        Update Category
      </button>
    </form>
  );

  return (
    <Base
      title="Update Category here!"
      description="Welcome to category creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {createCategoryForm()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
