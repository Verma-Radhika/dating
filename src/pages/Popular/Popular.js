import { FormControlLabel, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import CountrySelect from "react-bootstrap-country-select";
export const Popular = ({ data, setSearchData }) => {
  console.log("data by page from popular", data)
  const [age, setAge] = useState("");
  const [gender, setGender] = useState([]);
  const [value, setValue] = React.useState(null);
  var filterValue;
  // useEffect(() => {
  //   // if (gender) {
  //     filterValue = data.filter(person => person.gender == gender);
  //   // }
  //   // else if (age) {
  //   //   filterValue = data.filter(person => person.age > age - 5 && person.age <= age + 5)
  //   // }
  //   setSearchData(filterValue);
  // }, [gender])

  console.log("gernder by popupar page", filterValue)
  return (
    <div className="container">
      <form>
        <div className="form-row  justify-content-lg-around mt-3 ">
          <div className=" form-group col-md-6 ">
            {/* <h6>People nearby</h6> */}
            <FormControlLabel
              required
              control={<Switch />}
              label={
                <span
                  className="text-size  text-sm-left"
                  style={{ fontSize: ".8rem" }}
                >
                  NEAR MY AGE
                </span>
              }
            />
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
              <option >Both</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
