import React, { useEffect, useState } from "react";
export const Favorites = () => {

  const [searchPage, setSearchPage] = useState(true);
  const [nearbyPage, setNearByPage] = useState(false);

  const handleSearchPage = () => {
    console.log("ye");
    setSearchPage(true);
    setNearByPage(false);
  };
  const handleNearByPage = () => {
    setSearchPage(false);
    setNearByPage(true);
  };

  useEffect(() => {}, []);
  // console.log("dummy data", dummyData);
  return (
    <>
      <div className="selactOptionContainer">
        <div className="selactOption">
          <div
            onClick={handleSearchPage}
            className={nearbyPage ? "tabHide" : "tabActive"}
          >
            {" "}
            NOTIFICATIONS
          </div>
          <div
            onClick={handleNearByPage}
            className={searchPage ? "tabHide" : "tabActive"}
          >
            NEW FEEDS
          </div>
        </div>
        {searchPage ? " NOTIFICATIONS" : "NEW FEEDS"}
      </div>

      {/* .............................show data......................... */}
    </>
  );
};
