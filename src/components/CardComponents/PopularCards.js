import React, { useState } from "react";
import ForumIcon from "@mui/icons-material/Forum";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Modal } from "@mui/material";
export const PopularCards = ({ data }) => {
  console.log("data", data);
  const [counter, setCounter] = useState(0);
  // ..................... image Modal ......................
  const [isOpen, setIsopen] = useState(false);

  const handleOpenImage = () => setIsopen(true);
  const handleCloseImage = () => setIsopen(false);

  // ........................ end modal.......................

  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };
  var setImage;
  // console.log("like", likes);
  return (
    <>
      <div className="container cardContainer py-5">
        <div className="row pb-5 mb-4">
          {data?.map((el, index) => {
            
            return (
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={index}>
                <div
                  className="card shadow-sm border  border-1 rounded-0"
                  style={{ marginTop: "20px" }}
                >
                  <div className="card-body p-0">
                    <div style={{ height: "35vh" }}>
                      <Modal open={isOpen} onClose={handleCloseImage}>
                    <div className="imHeader">
                      <img src={el.image} alt="image_error" />
                    </div>
                  </Modal>
                      <img
                        onClick={handleOpenImage}
                        src={el.image}
                        alt=""
                        className="w-100 card-img-top"
                        style={{ height: "100%", width: "70%" }}
                      />
                    </div>
                    <div
                      className="p-2"
                      style={{ borderTop: "1px solid #e5e5e5" }}
                    >
                      {/* <h5 className="mb-0">{el.name}</h5> */}
                      <p className="name ">{el.name.toUpperCase()}</p>
                      <ul
                        className="social mb-0 list-inline mt-3"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <li
                          className="list-inline-item m-0 "
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <a
                            className="social-link "
                            onClick={() => handleLike(el.id)}
                          >
                            {!likes[el.id] ? (
                              <FavoriteBorderIcon />
                            ) : (
                              <FavoriteIcon style={{ color: "#f80d0d" }} />
                            )}
                          </a>
                          <p>{likes[el.id] ? `${likes[el.id]}` : ""}</p>
                        </li>

                        {/* apply here check if user is already frnds then show itsmove to its chates otherwise move to requestion pagr ..............*/}
                        <li
                          className="list-inline-item m-0"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <a href="messages" className="social-link">
                            <ForumIcon style={{ color: "black" }} />
                          </a>
                        </li>
                        {/* ............................ */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* .......................Modal Section ........................ */}

      {/* <Modal open={isOpen} onClose={handleCloseImage}>
        <div className="imHeader">
          <img src={setImage} alt="image_error" />
        </div>
      </Modal> */}
    </>
  );
};
