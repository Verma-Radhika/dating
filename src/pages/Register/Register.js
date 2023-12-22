import React, { useState } from "react";
import "./../Login/login.css";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../App";
export const Register = () => {
  const navigator =useNavigate();
  const [active, setActive] = useState(true);
  const [userValue, setUserValue] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    location: "",
    gender: "",
  });

  const handleUserValue = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    // console.log("name", name);
    setUserValue({ ...userValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userValue);
    fetch(`${apiUrl}/register`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userValue),
    }).then((res)=>res.json())
      .then((data) => {
        // console.log("data",data.Ok)
        if(data.success === true){
          alert("Register successfully!! ");
          navigator("/login");
        }
        else{
          alert(data.message);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <section className="login_section">
        <div className={active ? "container" : "active"}>
          <div className="user signinBx">
            <div className="formBx">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                  return false;
                }}
              >
                <h2>Create an account</h2>
                <input
                  type="text"
                  name="userName"
                  placeholder="Username"
                  // value={userValue.username}
                  onChange={handleUserValue}
                />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Name"
                  // value={userValue.name}
                  onChange={handleUserValue}
                />
                <select
                  // value={userValue.gender}
                  name="gender"
                  onChange={handleUserValue}
                >
                  <option value={"default"}>Gender</option>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                  <option value={"other"}>Other</option>
                </select>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  // value={userValue.email}
                  onChange={handleUserValue}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  // value={userValue.password}
                  onChange={handleUserValue}
                />
                <input
                  type="location"
                  name="location"
                  placeholder="Location"
                  // value={userValue.location}
                  onChange={handleUserValue}
                />
                <input type="submit" name="" value="Sign Up" />
                <p className="signup">
                  Already have an account ?<Link to="/login">Sign in.</Link>
                </p>
                !
              </form>
            </div>
            <div className="imgBx">
              <img
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
                alt="error"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};
