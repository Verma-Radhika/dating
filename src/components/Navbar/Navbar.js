// // import React, { useContext, useState, useEffect } from "react";
// //  import "./nav.css";
// // import CloseIcon from "@mui/icons-material/Close";
// // import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// // import { Link, useMediaQuery } from "@mui/material";
// // import FacebookIcon from "@mui/icons-material/Facebook";
// // import EmailIcon from "@mui/icons-material/Email";
// // import NotificationsIcon from "@mui/icons-material/Notifications";
// // import PeopleIcon from "@mui/icons-material/People";
// // import Face3Icon from "@mui/icons-material/Face3";

// // export const Navbar = () => {
// //   const matches = useMediaQuery("(max-width:600px)");
// //   const [show, setShow] = useState(false);
// //   const toggleBtnufun = () => {
// //     setShow(!show);
// //   };

// //   console.log("show", show);
// //   return (
// //     <>
// //     <nav class="navbar">
// //         <div class="navbar__logo">
// //           <i class="fab fa-accusoft"></i>
// //           <a href="" className="navLink">
// //             DreamC
// //           </a>
// //         </div>
// //         {matches ? (
// //           <CloseIcon className="navLink" onClick={() => toggleBtnufun()} />
// //         ) : (
// //           ""
// //         )}
// //         <ul className={!show ? "navbar__menu " : "navactive "}>
// //           <li>
// //             <a href="/notifications" className="navLink">
// //               <EmailIcon />
// //             </a>
// //           </li>
// //           <li>
// //             <NotificationsIcon className="navLink" />
// //           </li>
// //           <li>
// //             <PeopleIcon className="navLink" />
// //           </li>
// //           <li className="navLink">
// //             <a href="/myprofile" className="navLink">
// //             <span> User_Name</span> <Face3Icon />
// //             </a>
            
// //           </li>
// //         </ul>
// //     * {matches ? <CloseIcon onClick={() => toggleBtnufun()} /> : ""} 
// //       </nav>
// //       <main></main>
// //     </> 

// //   );
// // };

    

// //  {/* <>
     
    
// //     */}






// //     {/* 
  
// //       <div class="container-fluid">
// //         <button
// //           class="navbar-toggler"
// //           type="button"
// //           data-mdb-toggle="collapse"
// //           data-mdb-target="#navbarSupportedContent"
// //           aria-controls="navbarSupportedContent"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <i class="fas fa-bars"></i>
// //         </button>
    
// //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
// //           <a class="navbar-brand mt-2 mt-lg-0" href="#">
// //             <img
// //               src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
// //               height="15"
// //               alt="MDB Logo"
// //               loading="lazy"
// //             />
// //           </a>
// //           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// //             <li class="nav-item">
// //               <a class="nav-link" href="#">Dashboard</a>
// //             </li>
// //             <li class="nav-item">
// //               <a class="nav-link" href="#">Team</a>
// //             </li>
// //             <li class="nav-item">
// //               <a class="nav-link" href="#">Projects</a>
// //             </li>
// //           </ul>
// //         </div>
    
// //         <div class="d-flex align-items-center">
// //           <a class="text-reset me-3" href="#">
// //             <i class="fas fa-shopping-cart"></i>
// //           </a>    
// //           <div class="dropdown">
// //             <a
// //               class="text-reset me-3 dropdown-toggle hidden-arrow"
// //               href="#"
// //               id="navbarDropdownMenuLink"
// //               role="button"
// //               data-mdb-toggle="dropdown"
// //               aria-expanded="false"
// //             >
// //               <i class="fas fa-bell"></i>
// //               <span class="badge rounded-pill badge-notification bg-danger">1</span>
// //             </a>
// //             <ul
// //               class="dropdown-menu dropdown-menu-end"
// //               aria-labelledby="navbarDropdownMenuLink"
// //             >
// //               <li>
// //                 <a class="dropdown-item" href="#">Some news</a>
// //               </li>
// //               <li>
// //                 <a class="dropdown-item" href="#">Another news</a>
// //               </li>
// //               <li>
// //                 <a class="dropdown-item" href="#">Something else here</a>
// //               </li>
// //             </ul>
// //           </div>
// //           <div class="dropdown">
// //             <a
// //               class="dropdown-toggle d-flex align-items-center hidden-arrow"
// //               href="#"
// //               id="navbarDropdownMenuAvatar"
// //               role="button"
// //               data-mdb-toggle="dropdown"
// //               aria-expanded="false"
// //             >
// //               <img
// //                 src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
// //                 class="rounded-circle"
// //                 height="25"
// //                 alt="Black and White Portrait of a Man"
// //                 loading="lazy"
// //               />
// //             </a>
// //             <ul
// //               class="dropdown-menu dropdown-menu-end"
// //               aria-labelledby="navbarDropdownMenuAvatar"
// //             >
// //               <li>
// //                 <a class="dropdown-item" href="#">My profile</a>
// //               </li>
// //               <li>
// //                 <a class="dropdown-item" href="#">Settings</a>
// //               </li>
// //               <li>
// //                 <a class="dropdown-item" href="#">Logout</a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   */}























// import React, { useContext, useState, useEffect } from "react";
// import "./nav.css";
// import CloseIcon from "@mui/icons-material/Close";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// import { useMediaQuery } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import EmailIcon from "@mui/icons-material/Email";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import PeopleIcon from "@mui/icons-material/People";
// import Face3Icon from "@mui/icons-material/Face3";

// export const Navbar = () => {
//   const matches = useMediaQuery("(max-width:600px)");
//   const maxLength = useMediaQuery("(max-width:770px)");

//   const [show, setShow] = useState(false);
//   const toggleBtnufun = () => {
//     setShow(!show);
//   };

//   console.log("show", show);
//   return (
//     <>
//       <nav class="navbar">
//         <div class="navbar__logo">
//           <i class="fab fa-accusoft"></i>
//           <a href="" className="navLink">
//             DreamC
//           </a>
//         </div>
//         {matches ? (
//           <CloseIcon className="navLink" onClick={() => toggleBtnufun()} />
//         ) : (
//           ""
//         )}
//         <ul className={!show ? "navbar__menu " : "navactive "}>
//           <li>
//             <a className="navLink">
//               <EmailIcon />
//             </a>
//           </li>
//           <li>
//             <NotificationsIcon className="navLink" />
//           </li>
//           <li>
//             <PeopleIcon className="navLink" />
//           </li>
//           <li className="navLink">
//             <span> User_Name</span> <Face3Icon />
//           </li>
//         </ul>
//         {maxLength ? <CloseIcon onClick={() => toggleBtnufun()} /> : ""}
//       </nav>
//       <main></main>
//     </>
//   );
// };




import React, { useContext, useState, useEffect } from "react";
import "./nav.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import Face3Icon from "@mui/icons-material/Face3";

export const Navbar =()=>{


  return (
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand navbar__logo" href="/">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link navLink" aria-current="page" href="#"> <EmailIcon /></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="notifications"><NotificationsIcon/></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><PeopleIcon/></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">user<i class="fa-solid fa-user"></i></a>
              </li>
            </ul>
           </div>
        </div>
      </nav>
  )
}