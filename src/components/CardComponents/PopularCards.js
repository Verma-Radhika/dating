import React, { useState } from "react";
export const PopularCards = ({ data }) => {
  console.log("data", data);
  const [counter, setCounter] = useState(0);

  return (
    <div class="container cardContainer py-5">
      <div class="row pb-5 mb-4">
        {data?.map((el) => (
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div
              class="card shadow-sm border  border-1 rounded-0"
              style={{ marginTop: "20px" }}
            >
              <div class="card-body p-0">
                <img
                  // src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                  src={el.image}
                  alt=""
                  class="w-100 card-img-top"
                />
                <div class="p-2" style={{ borderTop: "1px solid #e5e5e5" }}>
                  {/* <h5 class="mb-0">{el.name}</h5> */}
                  <p class="small ">{el.name}</p>
                  <ul
                    class="social mb-0 list-inline mt-3"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <li
                      class="list-inline-item m-0 "
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <a
                        
                        class="social-link "
                        onClick={() => setCounter((prev) => prev + 1)}
                      >
                        <i class="fa fa-heart"></i>
                      </a>
                      <p>{counter}</p>
                    </li>
                    <li
                      class="list-inline-item m-0"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <a href="#" class="social-link">
                        {/* <i class="fa-sharp fa-messages"></i> */}
                        <i class="fa fa-ellipsis-vertical"></i>
                        {/* <i class="fa-sharp fa-solid fa-messages"></i> */}
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
