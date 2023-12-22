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
import { apiUrl } from "../../App";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const matches = useMediaQuery("(max-width:990px)");
const navigator= useNavigate()
  const logutFunc = () => {
    fetch(`${apiUrl}/logout`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.status == true) {
          localStorage.clear();
          navigator("/login")
        } else {
          alert("logout have error somthing..");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand navbar__logo" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {!matches ? (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link navLink" aria-current="page" href="#">
                  {" "}
                  <EmailIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="notifications">
                  <NotificationsIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <PeopleIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="myProfile">
                  user<i className="fa-solid fa-user"></i>
                </a>
              </li>
              <li className="nav-item" onClick={() => logutFunc()}>
                <a className="nav-link">Logout</a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link navLink" aria-current="page" href="#">
                  {" "}
                  Email <EmailIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="notifications">
                  Notifications <NotificationsIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Followers <PeopleIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="myProfile">
                  user<i className="fa-solid fa-user"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="myProfile">
                  View Profile<i className="fa-solid fa-user"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="settings">
                  Setting <i className="fa fa-cog"></i>
                </a>
              </li>
              <li className="nav-item" onClick={() => localStorage.clear()}>
                <a className="nav-link">Logout</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
