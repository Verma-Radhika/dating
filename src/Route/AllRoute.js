import React from "react";
import { Route, Routes } from "react-router-dom";
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
export const AllRoute = () => {

  var token = JSON.parse(localStorage.getItem("token"))
  console.log("token" ,token)
  return (
    <>
  {/* {token ? */}
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
      {/* <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/> */}

      {/* .......................................................... */}
      <Route path="/about" element={<About />} />
    </Routes>
{/* :
<Register/>
} */}
    </>
  );
};
