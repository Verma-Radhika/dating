import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { Button, TextareaAutosize, useMediaQuery } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HelpIcon from "@mui/icons-material/Help";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// .................. modal style ......................

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "1px solid white",
  boxShadow: 24,
  p: 4,
  border: "1px solid red",
};

const Sidebar = ({ children }) => {
  const matches = useMediaQuery("(max-width:600px)");
  const sideBar = useMediaQuery("(max-width:1000px)");
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  // console.log("match", matches);
  const menuItem = [
    {
      path: "/meet/new/friends",
      name: "Meet New Friends",
      icon: <HomeIcon />,
    },
    {
      path: "/popular",
      name: "Popular Photos",
      icon: <WhatshotIcon />,
    },
    {
      path: "/suggestions",
      name: "Suggestion",
      icon: <QuestionMarkIcon />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <QuestionAnswerIcon />,
    },
    {
      path: "/favorites",
      name: "Favorites",
      icon: <StarIcon />,
    },
    {
      path: "/friends/request",
      name: "My Friends Requests",
      icon: <PeopleIcon />,
    },
    {
      path: "/visitors",
      name: "Visitors",
      icon: <RemoveRedEyeIcon />,
    },
    {
      path: "/notifications",
      name: "Notification",
      icon: <NotificationsIcon />,
    },
    {
      path: "/productLifffst",
      name: "Likes",
      icon: <FavoriteIcon />,
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [viewProfile, setViewProfile] = useState(false);
  const handleViewProfile = () => {
    setViewProfile(!viewProfile);
  };
  return (
    <>
      <div className="SideBarcontainer">
        <div style={{ width: !sideBar ? "450px" : "50px" }} className="sidebar">
          {/* <div className="top_section"> */}
          <div
            style={{
              background: "#e87d9a",
              width: "100%",
              display: !sideBar ? "block" : "none",
            }}
          >
            <h4
              className="logo"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
              onClick={handleViewProfile}
            >
              Name{" "}
              {viewProfile ? (
                <ArrowDropDownIcon style={{ marginTop: "10px" }} />
              ) : (
                <ArrowDropUpIcon style={{ marginTop: "10px" }} />
              )}
            </h4>
            <div
              style={{
                background: "#f2a6bb",
                borderBottom: "1px solid #c6c4c3",
              }}
            >
              {viewProfile ? (
                <>
                  <NavLink
                    to="/myProfile"
                    // style={{ marginTop: "-5px" }}
                    className="link"
                    activeclassName="active"
                  >
                    <div className="icon">
                      <PersonIcon />
                    </div>
                    <div
                      style={{ display: !sideBar ? "block" : "none" }}
                      className="link_text"
                    >
                      VIEW PROFILE
                    </div>
                  </NavLink>
                  <NavLink
                    to="/settings"
                    // style={{ marginTop: "-15px" }}
                    className="link"
                    activeclassName="active"
                  >
                    <div className="icon">
                      <SettingsIcon />
                    </div>
                    <div
                      style={{ display: !sideBar ? "block" : "none" }}
                      className="link_text"
                    >
                      SETTING
                    </div>
                  </NavLink>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          {menuItem?.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item?.icon}</div>
              <div
                style={{ display: !sideBar ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
          {/* </div> */}
          <div className="link" activeclassName="active" onClick={handleOpen}>
            <div className="icon">
              {" "}
              <HelpIcon />
            </div>
            <div
              style={{ display: !sideBar ? "block" : "none" }}
              className="link_text"
            >
              Feedbacks & Suggestions
            </div>
          </div>
          {/* <Button>Open modal</Button> */}
        </div>
      </div>
      {/* modal............................... */}

      <div></div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="feedbackContainer">
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h1"
            sx={{ paddingBottom: 1 }}
          >
            Feedbacks & Suggestions
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 1, paddingBottom: 1 }}
          >
            <TextareaAutosize
              minRows={4}
              placeholder="Write your feedback or suggestions here..."
            />
          </Typography>
          <Button className="feedBackBtn" variant="contained" color="success">
            Send Feedback
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Sidebar;

