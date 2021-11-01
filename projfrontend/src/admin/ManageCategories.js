// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { isAuthenticate } from "../auth/helper";
// import Base from "../core/Base";
// import { deleteCategory, getCategories } from "./helper/adminapicall";

// const ManageCategories = () => {
//   const [cate, setCate] = useState([]);

//   const { user, token } = isAuthenticate();

//   const preload = () => {
//     getCategories().then((data) => {
//       console.log(`in managecategory-> ${data}`);
//       if (data && data.error) {
//         console.log(data.error);
//       } else {
//         setCate(data);
//         // console.log(data);
//       }
//     });
//   };

//   useEffect(() => {
//     preload();
//   }, []);

//   const deleteThisCate = (cateId) => {
//     // console.log(cateId);
//     deleteCategory(cateId, user._id, token).then((data) => {
//       if (data && data.error) {
//         console.log(data.error);
//       } else {
//         preload();
//       }
//     });
//   };

//   return (
//     <Base title="Welcome admin" description="Manage categories here">
//       <h2 className="mb-4">All categories:</h2>
//       <Link className="btn btn-info" to={`/admin/dashboard`}>
//         <span className="">Admin Home</span>
//       </Link>
//       <div className="row">
//         <div className="col-12">
//           <h2 className="text-center text-white my-3">Total 3 products</h2>

//           {cate &&
//             cate.map((category, index) => {
//               return (
//                 <div key={index} className="row text-center mb-2 ">
//                   <div className="col-4">
//                     <h3 className="text-white text-left">{category.name}</h3>
//                   </div>
//                   <div className="col-4">
//                     <Link
//                       className="btn btn-success"
//                       to={`/admin/category/update/${category._id}`}
//                     >
//                       <span className="">Update</span>
//                     </Link>
//                   </div>
//                   <div className="col-4">
//                     <button
//                       onClick={() => {
//                         deleteThisCate(category._id);
//                       }}
//                       className="btn btn-danger"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </Base>
//   );
// };

// export default ManageCategories;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticate } from "../auth/helper";
import Base from "../core/Base";
import { deleteCategory, getCategories } from "./helper/adminapicall";

const ManageCategories = () => {
  const [cate, setCate] = useState([]);

  const { user, token } = isAuthenticate();

  const preload = () => {
    getCategories().then((data) => {
      console.log(`in managecategory-> ${data}`);
      if (data && data?.error) {
        console.log(data?.error);
      } else {
        setCate(data);
        // console.log(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCate = (cateId) => {
    // console.log(cateId);
    deleteCategory(cateId, user._id, token).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base title="Welcome admin" description="Manage categories here">
      <h2 className="mb-4">All categories:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Total 3 products</h2>

          {cate &&
            cate.map((category, index) => {
              return (
                <div key={index} className="row text-center mb-2 ">
                  <div className="col-4">
                    <h3 className="text-white text-left">{category.name}</h3>
                  </div>
                  <div className="col-4">
                    <Link
                      className="btn btn-success"
                      to={`/admin/category/update/${category._id}`}
                    >
                      <span className="">Update</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <button
                      onClick={() => {
                        deleteThisCate(category._id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
