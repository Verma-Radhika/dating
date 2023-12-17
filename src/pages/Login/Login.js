import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../App";

export const Login = () => {
  const navigator = useNavigate();
  const [logStyle, setLogStyle] = useState("container");
  const [active, setActive] = useState(true);
  const [userValue, setUserValue] = useState({
    email: "",
    password: "",
  });

  const handleLoginValue = (e) => {
    const { name, value } = e.target;
    console.log("name", name, value);
    setUserValue({ ...userValue, [name]: value });
  };
  // console.log("userValue" , userValue);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // e.preventDefault();
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userValue),
    })
      .then((res) => {
        console.log("res", res);
        console.log("data", res.ok);
        if (res.ok === true) {
          alert("login succesfully!! ");
          navigator("/");
        } else {
          console.log(res);
          alert(res.statusText);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <section className="login_section">
        <div className={active ? "container" : "active"}>
          <div class="user signinBx">
            <div class="imgBx">
              <img
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
                alt=""
                onClick={() => console.log("image clicked")}
              />
            </div>
            <div class="formBx">
              <form
                onSubmit={(e) => {
                  handleSubmitLogin(e);
                  return false;
                }}
              >
                <h2>Sign In</h2>
                <input
                  type="text"
                  name="email"
                  onChange={handleLoginValue}
                  placeholder="enter email"
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleLoginValue}
                  placeholder="Password"
                />
                <input type="submit" name="" value="Login" />
                <p class="signup">
                  Don't have an account ?<Link to="/register">Sign Up.</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
