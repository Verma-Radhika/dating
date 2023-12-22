import { Hidden } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const SearchPageData = ({ data }) => {
  // console.log("data", data);
  return (
    <div className="container cardContainer py-5">
      <div className="row pb-5 mb-4">
        {data?.map((el,index) => (
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 " key={index}>
            <div
              className="card shadow-sm border  border-1 rounded-0 h-10"
              style={{ marginTop: "20px" , border:"1px solid red"}}
            >
               <Link to={`/profile/${el.id}`}>
              <div className="card-body p-0">
                <div style={{height:"35vh"}}>
                <img 
                  // src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                  src={el.image}
                  alt=""
                  className="w-100 card-img-top"
                  style={{height:"100%",width:"70%"}}
                />
                </div>
                <div className="p-2" style={{ borderTop: "1px solid #e5e5e5" }}>
                  <p className="small ">{el.name}</p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        ))}
   
      </div>
    </div>
  );
};

// import React from "react";
// import "./cards.css";
// const Cards = () => {
//   return (
//     <>
//       <div className="container cardContainer py-5">
//         <div className="row pb-5 mb-4">
//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card shadow-sm border-0 rounded">
//               <div className="card-body p-0">
//                 <img
//                   src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
//                   alt=""
//                   className="w-100 card-img-top"
//                 />
//                 <div className="p-4">
//                   <h5 className="mb-0">Mark Rockwell</h5>
//                   <p className="small text-muted">CEO - Consultant</p>
//                   <ul className="social mb-0 list-inline mt-3">
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-linkedin"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card shadow-sm border-0 rounded">
//               <div className="card-body p-0">
//                 <img
//                   src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg"
//                   alt=""
//                   className="w-100 card-img-top"
//                 />
//                 <div className="p-4">
//                   <h5 className="mb-0">Mark Rockwell</h5>
//                   <p className="small text-muted">CEO - Consultant</p>
//                   <ul className="social mb-0 list-inline mt-3">
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-linkedin"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card shadow-sm border-0 rounded">
//               <div className="card-body p-0">
//                 <img
//                   src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
//                   alt=""
//                   className="w-100 card-img-top"
//                 />
//                 <div className="p-4">
//                   <h5 className="mb-0">Mark Rockwell</h5>
//                   <p className="small text-muted">CEO - Consultant</p>
//                   <ul className="social mb-0 list-inline mt-3">
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-linkedin"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card shadow-sm border-0 rounded">
//               <div className="card-body p-0">
//                 <img
//                   src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg"
//                   alt=""
//                   className="w-100 card-img-top"
//                 />
//                 <div className="p-4">
//                   <h5 className="mb-0">Mark Rockwell</h5>
//                   <p className="small text-muted">CEO - Consultant</p>
//                   <ul className="social mb-0 list-inline mt-3">
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li className="list-inline-item m-0">
//                       <a href="#" className="social-link">
//                         <i className="fa fa-linkedin"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2 className="font-weight-bold mb-2">Active Profiles</h2>
//         <p className="font-italic text-muted mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt.
//         </p>

//         <div className="row pb-5 mb-4">
//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card rounded shadow-sm border-0">
//               <div className="card-body p-0">
//                 <div className="bg-primary px-5 py-4 text-center card-img-top">
//                   <img
//                     src="https://bootstrapious.com/i/snippets/sn-cards/teacher-4.jpg"
//                     alt="..."
//                     width="100"
//                     className="rounded-circle mb-2 img-thumbnail d-block mx-auto"
//                   />
//                   <h5 className="text-white mb-0">Emma Nevoresky</h5>
//                   <p className="small text-white mb-0">Elite user</p>
//                 </div>
//                 <div className="p-4 d-flex justify-content-center">
//                   <ul className="list-inline mb-0">
//                     <li className="list-inline-item">
//                       <h5 className="font-weight-bold mb-0 d-block">241</h5>
//                       <small className="text-muted">
//                         <i className="fa fa-picture-o mr-1 text-primary"></i>Photos
//                       </small>
//                     </li>
//                     <li className="list-inline-item">
//                       <h5 className="font-weight-bold mb-0 d-block">84K</h5>
//                       <small className="text-muted">
//                         <i className="fa fa-user-circle-o mr-1 text-primary"></i>
//                         Followers
//                       </small>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card rounded shadow-sm border-0">
//               <div className="card-body p-0">
//                 <div className="bg-success px-5 py-4 text-center card-img-top">
//                   <img
//                     src="https://bootstrapious.com/i/snippets/sn-cards/teacher-2.jpg"
//                     alt="..."
//                     width="100"
//                     className="rounded-circle mb-2 img-thumbnail d-block mx-auto"
//                   />
//                   <h5 className="text-white mb-0">Samuel Hardy</h5>
//                   <p className="small text-white mb-0">Elite user</p>
//                 </div>
//                 <div className="p-4 d-flex justify-content-center">
//                   <ul className="list-inline mb-0">
//                     <li className="list-inline-item">
//                       <h5 className="font-weight-bold mb-0 d-block">241</h5>
//                       <small className="text-muted">
//                         <i className="fa fa-picture-o mr-1 text-success"></i>Photos
//                       </small>
//                     </li>
//                     <li className="list-inline-item">
//                       <h5 className="font-weight-bold mb-0 d-block">84K</h5>
//                       <small className="text-muted">
//                         <i className="fa fa-user-circle-o mr-1 text-success"></i>
//                         Followers
//                       </small>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card rounded shadow-sm border-0">
//               <div className="card-body p-0">
//                 <div className="bg-info px-5 py-4 text-center card-img-top">
//                   <img
//                     src="https://bootstrapious.com/i/snippets/sn-cards/teacher-7.jpg"
//                     alt="..."
//                     width="100"
//                     className="rounded-circle mb-2 img-thumbnail d-block mx-auto"
//                   />
//                   <h5 className="text-white mb-0">Tom Sunderland</h5>
//                   <p className="small text-white mb-0">Elite user</p>
//                 </div>
//                 <div className="p-4 d-flex justify-content-center">
//                   <ul className="list-inline mb-0">
//                     <li className="list-inline-item">
//                       <h5 className="font-weight-bold mb-0 d-block">241</h5>
//                       <small className="text-muted">
//                         <i className="fa fa-picture-o mr-1 text-info"></i>Photos
//                       </small>
//                     </li>
//                     <li className="list-inline-item">
//                       <h5 className="font-weight-bold mb-0 d-block">84K</h5>
//                       <small className="text-muted">
//                         <i className="fa fa-user-circle-o mr-1 text-info"></i>
//                         Followers
//                       </small>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card rounded shadow-sm border-0">
//               <div className="card-body p-0">
//                 <div className="bg-warning px-5 py-4 text-center card-img-top">
//                   <img
//                     src="https://bootstrapious.com/i/snippets/sn-cards/teacher-1.jpg"
//                     alt="..."
//                     width="100"
//                     className="rounded-circle mb-2 img-thumbnail d-block mx-auto"
//                   />
//                   <h5 className="text-white mb-0">John Tarly</h5>
//                   <p className="small text-white mb-0">Elite user</p>
//                 </div>
//                 <div className="p-4 d-flex justify-content-center">
//                   <ul className="list-inline mb-0">
//                     <li className="list-inline-item">
//                       <h5 className="font-weight-bold mb-0 d-block">241</h5>
//                       <small className="text-muted">
//                         <i className="fa fa-picture-o mr-1 text-warning"></i>Photos
//                       </small>
//                     </li>
//                     <li className="list-inline-item">
//                       <h5 className="font-weight-bold mb-0 d-block">84K</h5>
//                       <small className="text-muted">
//                         <i className="fa fa-user-circle-o mr-1 text-warning"></i>
//                         Followers
//                       </small>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row pb-5">
//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card rounded shadow-sm border-0">
//               <div className="card-body p-5">
//                 <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
//                 <h5>Products Sales</h5>
//                 <p className="small text-muted font-italic">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 </p>
//                 <div className="progress rounded-pill">
//                   <div
//                     role="progressbar"
//                     aria-valuenow="70"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                     style={{ width: "70%" }}
//                     className="progress-bar rounded-pill"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card rounded shadow-sm border-0">
//               <div className="card-body p-5">
//                 <i className="fa fa-tasks fa-2x mb-3 text-success"></i>
//                 <h5>Completed Tasks</h5>
//                 <p className="small text-muted font-italic">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 </p>
//                 <div className="progress rounded-pill">
//                   <div
//                     role="progressbar"
//                     aria-valuenow="80"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                     style={{ width: "80%" }}
//                     className="progress-bar bg-success rounded-pill"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card rounded shadow-sm border-0">
//               <div className="card-body p-5">
//                 <i className="fa fa-user-circle-o fa-2x mb-3 text-info"></i>
//                 <h5>New Users</h5>
//                 <p className="small text-muted font-italic">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 </p>
//                 <div className="progress rounded-pill">
//                   <div
//                     role="progressbar"
//                     aria-valuenow="70"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                     style={{ width: "70%" }}
//                     className="progress-bar bg-info rounded-pill"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div className="card rounded shadow-sm border-0">
//               <div className="card-body p-5">
//                 <i className="fa fa-shopping-bag fa-2x mb-3 text-warning"></i>
//                 <h5>New Products</h5>
//                 <p className="small text-muted font-italic">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 </p>
//                 <div className="progress rounded-pill">
//                   <div
//                     role="progressbar"
//                     aria-valuenow="70"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                     style={{ width: "70%" }}
//                     className="progress-bar bg-warning rounded-pill"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;
