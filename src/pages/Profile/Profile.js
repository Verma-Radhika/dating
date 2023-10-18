import { useEffect, useState } from "react";
// import "../ProfileStyles/profile.css";
import "./ProfileStyles/profile.css";
import { Video } from "./Video.js";
import { FriendsList } from "./FriendsList.js";
import { About } from "./About.js";
import { Photos } from "./Photos";
import { Post } from "./Post";

export const Profile = () => {
  const [proValue, setProValue] = useState(1);



  useEffect(() => {

  }, []);
  console.log("value", proValue);
  return (
    <div class="container mt-2">
      <div id="content" class="content p-0">
        <div class="profile-header">
          <div class="profile-header-cover"></div>
          <div class="profile-header-content">
            <div class="profile-header-img">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt=""
              />
            </div>
            <div class="profile-header-info">
              <h4 class="m-t-sm">John Doe</h4>
              <p class="m-b-sm">UXUI + Frontend Developer</p>
              <a href="#" class="btn btn-xs btn-info mb-4">
                Edit Profile
              </a>
            </div>
          </div>
          <ul class="profile-header-tab nav nav-tabs">
            <li class="nav-item">
              <a class={`nav-link_ ${proValue==1 ? "active show":""}`} onClick={() => setProValue(1)}>
                POSTS
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link_ ${proValue == 2 ? "active show" : ""}`}
                onClick={() => setProValue(2  )}
              >
                ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link_ ${proValue == 3 ? "active show" : ""}`}
                onClick={() => setProValue(3)}
              >
                PHOTOS
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link_ ${proValue == 4 ? "active show" : ""}`}
                onClick={() => setProValue(4)}
              >
                VIDEOS
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link_ ${proValue == 5 ? "active show" : ""}`}
                onClick={() => setProValue(5)}
              >
                FRIENDS
              </a>
            </li>
          </ul>
        </div>

        <div class="profile-container">
          {proValue == 1 ? (
            <Post />
          ) : proValue == 2 ? (
            <About />
          ) : proValue == 3 ? (
            <Photos />
          ) : proValue == 4 ? (
            <Video />
          ) : (
            <FriendsList />
          )}
        </div>
      </div>
    </div>
  );
};
