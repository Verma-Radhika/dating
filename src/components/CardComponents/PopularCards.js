import React, { useState } from "react";
export const PopularCards = ({ data }) => {
  console.log("data", data);
  const [counter, setCounter] = useState(0);

  return (
    <div className="container cardContainer py-5">
      <div className="row pb-5 mb-4">
        {data?.map((el) => (
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div
              className="card shadow-sm border  border-1 rounded-0"
              style={{ marginTop: "20px" }}
            >
              <div className="card-body p-0">
                <img
                  // src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                  src={el.image}
                  alt=""
                  className="w-100 card-img-top"
                />
                <div className="p-2" style={{ borderTop: "1px solid #e5e5e5" }}>
                  {/* <h5 className="mb-0">{el.name}</h5> */}
                  <p className="small ">{el.name}</p>
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
                        onClick={() => setCounter((prev) => prev + 1)}
                      >
                        <i className="fa fa-heart"></i>
                      </a>
                      <p>{counter}</p>
                    </li>
                    <li
                      className="list-inline-item m-0"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <a href="#" className="social-link">
                        {/* <i className="fa-sharp fa-messages"></i> */}
                        <i className="fa fa-ellipsis-vertical"></i>
                        {/* <i className="fa-sharp fa-solid fa-messages"></i> */}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
