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

export const Navbar = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const [show, setShow] = useState(false);
  const toggleBtnufun = () => {
    setShow(!show);
  };

  console.log("show", show);
  return (
    <>
      <nav class="navbar">
        <div class="navbar__logo">
          <i class="fab fa-accusoft"></i>
          <a href="" className="navLink">
            DreamC
          </a>
        </div>
        {matches ? (
          <CloseIcon className="navLink" onClick={() => toggleBtnufun()} />
        ) : (
          ""
        )}
        <ul className={!show ? "navbar__menu " : "navactive "}>
          <li>
            <a className="navLink">
              <EmailIcon />
            </a>
          </li>
          <li>
            <NotificationsIcon className="navLink" />
          </li>
          <li>
            <PeopleIcon className="navLink" />
          </li>
          <li className="navLink">
            <span> User_Name</span> <Face3Icon />
          </li>
        </ul>
        {/* {matches ? <CloseIcon onClick={() => toggleBtnufun()} /> : ""} */}
      </nav>
      {/* <main></main> */}
    </>
  );
};
