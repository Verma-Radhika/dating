import { useEffect, useState } from "react";
// import "../ProfileStyles/profile.css";
import "./ProfileStyles/profile.css";
import { Video } from "./Video.js";
import { FriendsList } from "./FriendsList.js";
import { About } from "./About.js";
import { Photos } from "./Photos";
import { Post } from "./Post";
import { useParams } from "react-router-dom";
import { Data } from "../../db.js";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
export const Profile = () => {
  const [proValue, setProValue] = useState(1);
  const { id } = useParams(); 
  console.log("id", id);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = Data.find((item) => item.id === id);
    console.log("select Item", selectedItem);
    if (selectedItem) {
      setItem(selectedItem);
    } else {
      console.error(`Item with ID ${id} not found.`);
    }
  }, [id]);
  
  return (
    <div class="container mt-1">
      <div id="content" class="content p-0">
        <div class="profile-header">
          <div class="profile-header-cover"> </div>
          <div class="profile-header-content">
            <div class="profile-header-img">
              <img
                src={`${item?.image}`}
                alt=""
                style={{width:"100%" , height:"100%"}}
              />
              <AddAPhotoOutlinedIcon/>
            </div>
            <div class="profile-header-info col-6">
              <h4 class="m-t-sm">{ item?.name}</h4>
              <p class="m-b-sm">UXUI + Frontend Developer</p>
              <div className="" style={{display:"flex"}}>
              <p>0</p>
                <p style={{marginLeft:"80px"}}>0</p>
              </div>
              <div style={{display:"flex"}}>
              <p>Like</p>
                <p style={{marginLeft:"30px"}}>Friends</p>
              </div>

              {/* Icon space ..  To change profile image and bgimage */}
              
            </div>
          </div>
          <ul class="profile-header-tab nav nav-tabs">
            <li class="nav-item">
              <a
                class={`nav-link_ ${proValue == 1 ? "active show" : ""}`}
                onClick={() => setProValue(1)}
              >
                POSTS
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link_ ${proValue == 2 ? "active show" : ""}`}
                onClick={() => setProValue(2)}
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
