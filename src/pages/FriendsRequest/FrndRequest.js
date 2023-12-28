// import React from "react";
// import "./frndRequest.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
// export const FrndRequest = () => {
//   return (
    // <div className="container bootstrap snippets bootdey mt-3">
    //   <div className="jumbotron list-content">
    //     <ul className="list-group">
    //       <li href="#" className="list-group-item title">
    //         Your friend Request
    //       </li>
    //       <li href="#" className="list-group-item text-left">
    //         <img
    //           className="img-thumbnail"
    //           src="https://bootdey.com/img/Content/User_for_snippets.png"
    //         />
    //         <label className="name">
    //           Juan guillermo cuadrado
    //           <br />
    //         </label>
    //         <label className="pull-right">
    //           <a className="btn btn-success btn-xs glyphicon glyphicon-ok">
    //             <CheckIcon />
    //           </a>
    //           <a
    //             className="btn btn-danger  btn-sm glyphicon glyphicon-trash"
    //             href="#"
    //             title="Delete"
    //           >
    //             <ClearIcon />
    //           </a>
    //           <a
    //             className="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment"
    //             href="#"
    //             title="Send message"
    //           ></a>
    //         </label>
    //         <div className="break"></div>
    //       </li>
    //       <li href="#" className="list-group-item text-left">
    //         <img
    //           className="img-thumbnail"
    //           src="https://bootdey.com/img/Content/user_1.jpg"
    //         />
    //         <label className="name">James Rodriguez (10)</label>
    //         <label className="pull-right">
    //           <a className="btn btn-success btn-xs glyphicon glyphicon-ok">
    //             <CheckIcon />
    //           </a>
    //           <a
    //             className="btn btn-danger  btn-xs glyphicon glyphicon-trash"
    //             href="#"
    //             title="Delete"
    //           >
    //             <ClearIcon />
    //           </a>
    //           <a
    //             className="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment"
    //             href="#"
    //             title="Send message"
    //           ></a>
    //         </label>
    //         <div className="break"></div>
    //       </li>
    //       <li href="#" className="list-group-item text-left">
    //         <img
    //           className="img-thumbnail"
    //           src="https://bootdey.com/img/Content/user_2.jpg"
    //         />
    //         <label className="name">Mariana pajon</label>
    //         <label className="pull-right">
    //           <a className="btn btn-success btn-xs glyphicon glyphicon-ok">
    //             <CheckIcon />
    //           </a>
    //           <a
    //             className="btn btn-danger  btn-xs glyphicon glyphicon-trash"
    //             href="#"
    //             title="Delete"
    //           >
    //             <ClearIcon />
    //           </a>
    //           <a
    //             className="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment"
    //             href="#"
    //             title="Send message"
    //           ></a>
    //         </label>
    //         <div className="break"></div>
    //       </li>
    //       <li href="#" className="list-group-item text-left">
    //         <a className="btn btn-block btn-primary">
    //           <i className="glyphicon glyphicon-refresh"></i>
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
      <section className="section-50">
        <div className="container">
          {/* <h3 className="m-b-50 heading-line">
            Notifications <i className="fa fa-bell text-muted"></i>
          </h3> */}

          <div className="notification-ui_dd-content">
            <div className="notification-list notification-list--unread">
              <div className="notification-list_content">
                <div className="notification-list_img">
                  <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>John Doe</b> reacted to your post
                  </p>
                  <p className="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div className="">
                <a className="btn btn-success btn-xs glyphicon glyphicon-ok">
                  <CheckIcon />
                </a>
                <a
                  className="btn btn-danger  btn-sm glyphicon glyphicon-trash"
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
            <div className="notification-list notification-list--unread">
              <div className="notification-list_content">
                <div className="notification-list_img">
                  <img src="https://i.imgur.com/w4Mp4ny.jpg" alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Richard Miles</b> liked your post
                  </p>
                  <p className="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div className="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/AbZqFnR.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
            <div className="notification-list">
              <div className="notification-list_content">
                <div className="notification-list_img">
                  <img src="https://i.imgur.com/ltXdE4K.jpg" alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Brian Cumin</b> reacted to your post
                  </p>
                  <p className="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div className="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/bpBpAlH.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
            <div className="notification-list">
              <div className="notification-list_content">
                <div className="notification-list_img">
                  <img src="https://i.imgur.com/CtAQDCP.jpg" alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Lance Bogrol</b> reacted to your post
                  </p>
                  <p className="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div className="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/iIhftMJ.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
            <div className="notification-list">
              <div className="notification-list_content">
                <div className="notification-list_img">
                  <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
                </div>
                <div className="notification-list_detail">
                  <p>
                    <b>Parsley Montana</b> reacted to your post
                  </p>
                  <p className="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div className="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/bpBpAlH.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#!" className="dark-link">
              Load more activity
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
