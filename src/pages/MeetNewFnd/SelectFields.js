import React, { useEffect, useState } from "react";
import CountrySelect from "react-bootstrap-country-select";
import Switch from "@mui/material/Switch";
// import Switch from '@material-ui/core/Switch';
import { FormControlLabel } from "@mui/material";
export const SelectFields = ({ data, setSearchData }) => {
  // console.log("search page", data);
  const [value, setValue] = React.useState(null);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState([]);
  // const label = { inputProps: { "aria-label": "Switch demo" } };
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

  // ..................................  extra code .................................
  // const ageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  // const new_age = 10;
  // const ageValue = ageArray.filter(person => person > new_age - 5 && person <= new_age + 5)
  // console.log("ageValue", ageValue);

  return (
    <div className="container">
      <form>
        <div class="form-row  justify-content-lg-between mt-3">
          <div class=" form-group col-md-4 ">
            <CountrySelect value={value} onChange={setValue} />
          </div>
          <div class=" form-group col-md-4 ">
            <CountrySelect value={value} onChange={setValue} />
          </div>
          <div class="form-group col-md-2">
            <select
              class="custom-select mr-sm-2"
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
      <div class="custom-control custom-switch text-md-right text-sm-left">
        <FormControlLabel
          required
          // checked={values.age}
          // onChange={()=>setAge(10)}
          // onBlur={handleBlur}
          control={
            <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          }
          label={
            <span class="text-size  text-sm-left" style={{ fontSize: ".9rem" }}>
              NEAR MY AGE
            </span>
          }
        />

       
      </div>
    </div>
  );
};
