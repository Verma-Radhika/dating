// import React from "react";
// import "./frndRequest.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
// export const FrndRequest = () => {
//   return (
    // <div class="container bootstrap snippets bootdey mt-3">
    //   <div class="jumbotron list-content">
    //     <ul class="list-group">
    //       <li href="#" class="list-group-item title">
    //         Your friend Request
    //       </li>
    //       <li href="#" class="list-group-item text-left">
    //         <img
    //           class="img-thumbnail"
    //           src="https://bootdey.com/img/Content/User_for_snippets.png"
    //         />
    //         <label class="name">
    //           Juan guillermo cuadrado
    //           <br />
    //         </label>
    //         <label class="pull-right">
    //           <a class="btn btn-success btn-xs glyphicon glyphicon-ok">
    //             <CheckIcon />
    //           </a>
    //           <a
    //             class="btn btn-danger  btn-sm glyphicon glyphicon-trash"
    //             href="#"
    //             title="Delete"
    //           >
    //             <ClearIcon />
    //           </a>
    //           <a
    //             class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment"
    //             href="#"
    //             title="Send message"
    //           ></a>
    //         </label>
    //         <div class="break"></div>
    //       </li>
    //       <li href="#" class="list-group-item text-left">
    //         <img
    //           class="img-thumbnail"
    //           src="https://bootdey.com/img/Content/user_1.jpg"
    //         />
    //         <label class="name">James Rodriguez (10)</label>
    //         <label class="pull-right">
    //           <a class="btn btn-success btn-xs glyphicon glyphicon-ok">
    //             <CheckIcon />
    //           </a>
    //           <a
    //             class="btn btn-danger  btn-xs glyphicon glyphicon-trash"
    //             href="#"
    //             title="Delete"
    //           >
    //             <ClearIcon />
    //           </a>
    //           <a
    //             class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment"
    //             href="#"
    //             title="Send message"
    //           ></a>
    //         </label>
    //         <div class="break"></div>
    //       </li>
    //       <li href="#" class="list-group-item text-left">
    //         <img
    //           class="img-thumbnail"
    //           src="https://bootdey.com/img/Content/user_2.jpg"
    //         />
    //         <label class="name">Mariana pajon</label>
    //         <label class="pull-right">
    //           <a class="btn btn-success btn-xs glyphicon glyphicon-ok">
    //             <CheckIcon />
    //           </a>
    //           <a
    //             class="btn btn-danger  btn-xs glyphicon glyphicon-trash"
    //             href="#"
    //             title="Delete"
    //           >
    //             <ClearIcon />
    //           </a>
    //           <a
    //             class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment"
    //             href="#"
    //             title="Send message"
    //           ></a>
    //         </label>
    //         <div class="break"></div>
    //       </li>
    //       <li href="#" class="list-group-item text-left">
    //         <a class="btn btn-block btn-primary">
    //           <i class="glyphicon glyphicon-refresh"></i>
    //           Load more...
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
//     // The diagram below depicts the number of times Maria broke her best and worst records throughout the season:
//     // const value = [3 4 21 36 10 28 35 5 24 42];
//     // She broke her best record four times (after games 1 ,2 ,3 , 9 ) and her worst record zero times (no score during the season was lower than the one she earned during her first game), so we print 4 0 as our answer.
//   );
// };

import React from "react";
import "../Notification/Notification.css";
export const FrndRequest = () => {
  return (
    <div>
      <section class="section-50">
        <div class="container">
          {/* <h3 class="m-b-50 heading-line">
            Notifications <i class="fa fa-bell text-muted"></i>
          </h3> */}

          <div class="notification-ui_dd-content">
            <div class="notification-list notification-list--unread">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>John Doe</b> reacted to your post
                  </p>
                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="">
                <a class="btn btn-success btn-xs glyphicon glyphicon-ok">
                  <CheckIcon />
                </a>
                <a
                  class="btn btn-danger  btn-sm glyphicon glyphicon-trash"
                  href="#"
                  title="Delete"
                >
                  <ClearIcon />
                </a>
                {/* <img
                  src="https://i.imgur.com/AbZqFnR.jpg"
                  alt="Feature image"
                /> */}
              </div>
            </div>
            <div class="notification-list notification-list--unread">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/w4Mp4ny.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>Richard Miles</b> liked your post
                  </p>
                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/AbZqFnR.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
            <div class="notification-list">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/ltXdE4K.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>Brian Cumin</b> reacted to your post
                  </p>

                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/bpBpAlH.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
            <div class="notification-list">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/CtAQDCP.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>Lance Bogrol</b> reacted to your post
                  </p>
                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/iIhftMJ.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
            <div class="notification-list">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>Parsley Montana</b> reacted to your post
                  </p>

                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/bpBpAlH.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
          </div>

          <div class="text-center">
            <a href="#!" class="dark-link">
              Load more activity
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
