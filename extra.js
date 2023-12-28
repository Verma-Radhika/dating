import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { AllRoute } from "./Route/AllRoute";
import { Navbar } from "./components/Navbar/Navbar";
import { ExtraFileNav } from "./components/Navbar/ExtraFileNav";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
// import ExtraFileNav from "./components/Navbar/ExtraFileNav";
export const apiUrl = "http://localhost:4000/api/v1/users";
const App = () => {
  

  const route = window.location.href.split("/")[3];
  console.log("route", route);
  return (
    <>
     <AllRoute/>
    </>
  );
};

export default App;










import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "../pages/About";
import { MeetNewFnd } from "../pages/MeetNewFnd/MeetNewFnd";
import { Suggestions } from "../pages/Suggetions.js/Suggestions";
import { Profile } from "../pages/Profile/Profile";
import { Messages } from "../pages/Meassages/Messages";
import { Visitor } from "../pages/Visitor/Visitor";
import { FrndRequest } from "../pages/FriendsRequest/FrndRequest"; 
import { Notifications } from "../pages/Notification/Notifications";
import { Favorites } from "../pages/Favoriute/Favorites";
import { PopularHome } from "../pages/Popular/PopularHome";
import { LikesPage } from "../pages/Likes/LikesPage";
import { Setting } from "../pages/Setting/Setting";
import { WatchVideo } from "../pages/WatchVideo";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { ExtraPage } from "../pages/ExtraPage/ExtraPage";
import Sidebar from "../components/Sidebar/Sidebar";
import { Navbar } from "../components/Navbar/Navbar";
export const AllRoute = () => {


  const route = window.location.href.split("/")[3];
  console.log("route", route);

  let navigate = useNavigate();  
    let getData = async () => {
      let token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    };
   
    useEffect(() => {
      getData();
    }, []);


  return (
   <>
      {route != "register" && route != "login" && <Navbar />}
      <div
        className={route != "register" && route != "login" && "appContainer"}
      >
        {route != "register" && route != "login" && (
          <div>
            <Sidebar />
          </div>
        )}
        <div>
          {route != "register" && route != "login" && (
            <>
              <div
                className="card"
                style={{
                  width: "100%",
                  height: "100px",
                  marginTop: "10px",
                }}
              >
                <img
                  src="https://www.themediaant.com/blog/wp-content/uploads/2021/07/text-advertising-business-web-icons-behind-torn-white-paper-text-advertising-behind-torn-white-paper-132063555.jpg"
                  width={"100%"}
                  height="100%"
                />
              </div>
              <div
                className="card"
                style={{
                  marginTop: "10px",
                }}
              >
                <div className="card-body">
                  Oops, you dont have a profile photo! If you want to become
                  more popular and make more friends, upload your photo now!
                </div>
              </div>
            </>
          )}
       
    <Routes>
      <Route path="/" element={<MeetNewFnd />} />
      {/* ............................My Pages............................ */}
      <Route path="/meet/new/friends" element={<MeetNewFnd />} />
      <Route path="/suggestions" element={<Suggestions />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/myProfile/" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/friends/request" element={<FrndRequest />} />
      <Route path="/visitors" element={<Visitor />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/popular" element={<PopularHome />} />
      <Route path="/likes" element={<LikesPage />} />
      <Route path="/settings" element={<Setting/>}/>
      <Route path="/watchVideo" element={<WatchVideo/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
        </div>
      </div>
    </>
  );
};







