import React, { useEffect, useState } from "react";
import "./mnf.css";
import { NearBy } from "./NearBy";
import Cards from "../../components/CardComponents/Cards";
import { SelectFields } from "./SelectFields.js";
import { Data } from "../../db.js";
import { common } from "@mui/material/colors";
import { SearchPageData } from "./SearchPageData";

export const MeetNewFnd = () => {
  const [searchPage, setSearchPage] = useState(true);
  const [nearbyPage, setNearByPage] = useState(false);
  const [dummyData, setDummyDate] = useState(Data);
  const [searchData, setSearchData] = useState([]);
  const handleSearchPage = () => {
    console.log("ye");
    setSearchPage(true);
    setNearByPage(false);
  };
  const handleNearByPage = () => {
    setSearchPage(false);
    setNearByPage(true);
  };

  // console.log("search page data by next page move", searchData)

  useEffect(() => {
    // console.log("data")
  }, []);
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
            SEARCH
          </div>
          <div
            onClick={handleNearByPage}
            className={searchPage ? "tabHide" : "tabActive"}
          >
            NEARBY
          </div>
        </div>
        <div className="container">
          {searchPage ? (
            <SelectFields data={dummyData} setSearchData={setSearchData} />
          ) : (
            <NearBy data={dummyData} setSearchData={setSearchData} />
          )}
        </div>
      </div>

      {/* .............................show data......................... */}
      <SearchPageData data={searchData} />
    </>
  );
};
