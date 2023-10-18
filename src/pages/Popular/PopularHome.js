import React, { useEffect, useState } from "react";
import "../MeetNewFnd/mnf.css";

import { Data } from "../../db.js";
// import { SearchPageData } from "./SearchPageData";
import { Popular } from "./Popular";
import { PeopleNearBy } from "./PeopleNearBy";
import { SearchPageData } from "../MeetNewFnd/SearchPageData";
import { PopularCards } from "../../components/CardComponents/PopularCards";

export const PopularHome = () => {
  const [searchPage, setSearchPage] = useState(true);
  const [nearbyPage, setNearByPage] = useState(false);
  const [dummyData, setDummyDate] = useState(Data);
  const [searchData, setSearchData] = useState([]);
  const handleSearchPage = () => {
    // console.log("ye");
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
      <div className="selactOptionContainer container-fluid fit-content">
        <div className="selactOption">
          <div
            onClick={handleSearchPage}
            className={nearbyPage ? "tabHide" : "tabActive"}
          >
            {" "}
            People NearBy
          </div>
          <div
            onClick={handleNearByPage}
            className={searchPage ? "tabHide" : "tabActive"}
          >
            Popular
          </div>
        </div>
        <div className="container">
          {searchPage ? <PeopleNearBy data={dummyData} setSearchData={setSearchData} /> : <Popular />}
        </div>
      </div>

      {/* .............................show data......................... */}

      {searchPage ? <PopularCards data={searchData} /> : <PopularCards data={dummyData} />}
     
    </>
  );
};
 