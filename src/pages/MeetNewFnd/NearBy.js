import { FormControlLabel, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import CountrySelect from "react-bootstrap-country-select";
export const NearBy = ({ data, setSearchData }) => {
 const [value, setValue] = React.useState(null);
 const [age, setAge] = useState(25);
 const [gender, setGender] = useState([]);
 var filterValue;

 const [checked, setChecked] = useState(false);
 const handleChange = (event) => {
   if (event.target.checked) {
     setChecked(event.target.checked);
     console.log("data  yes");
     filterValue = data.filter(
       (person) => person.age > age - 5 && person.age <= age + 5
     );
     setSearchData(filterValue);
   } else {
     setChecked("");
     setSearchData(data);
     console.log("no data found");
   }
 };

 useEffect(() => {
   console.log("data form useEffect", data);
   if (gender == "Female") {
     console.log("gender", gender);
     filterValue = data.filter((person) => person.gender == gender);
     setSearchData(filterValue);
   } else if (gender == "Male") {
     filterValue = data.filter((person) => person.gender == gender);
     setSearchData(filterValue);
   } else if (gender.value === "Both") {
     console.log("both", data);
     setSearchData(data);
   } else {
     setSearchData(data);
   }
   // setSearchData(filterValue);
 }, [gender, data]);

  return (
    <div className="container">
      <form>
        <div className="form-row  justify-content-lg-around mt-3 ">
          <div className=" form-group col-md-6 ">
            <h6>People nearby</h6>
          </div>
          <div className="form-group col-md-2">
            <select
              className="custom-select mr-sm-2"
              id="inlineFormCustomSelectPref"
              value={gender}
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option selected>Choose...</option>
              <option value={"Female"}>Women</option>
              <option value={"Male"}>Men</option>
              <option value={"Both"}>Both</option>
            </select>
          </div>
        </div>
      </form>
      <div className="custom-control custom-switch text-md-right text-sm-left">
        <FormControlLabel
          required
          control={
            <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          }
          label={
            <span className="text-size  text-sm-left" style={{ fontSize: ".9rem" }}>
              NEAR MY AGE
            </span>
          }
        />   
      </div>
    </div>
  );
};
