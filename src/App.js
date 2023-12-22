import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { AllRoute } from "./Route/AllRoute";
import { Navbar } from "./components/Navbar/Navbar";
import { ExtraFileNav } from "./components/Navbar/ExtraFileNav";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
// import ExtraFileNav from "./components/Navbar/ExtraFileNav";
export const apiUrl = "http://localhost:4000/api/v1/users";
const App = () => {
  const [counter, setCounter] = useState(0);
  // const timer = 1000;
  // const CounterFunction = () => {
  //   setCounter((prev) => prev + 1);
  // };
  // useEffect(() => {
  //  let func=  setInterval(() => {
  //     CounterFunction();
  //   }, timer);

  //   return ()=> clearInterval(func)
  // },);

  // var token = JSON.parse(localStorage.getItem("token"));
  // console.log("token", token);

  // if(token === "undefined" ||  token == null  || token == "" ){
  //   navigator("/")
  // }

  const route = window.location.href.split("/")[3];
  // console.log("route", route, window.location);
  return (
    <>
      {route != "register" && route != "login" && <Navbar />}
      <div
        className={route != "register" && route != "login" && "appContainer"}
      >
        {route != "register" && route != "login" && (
          <div>
            <Sidebar />
          </div>
        )}
        <div>
          {route != "register" && route != "login" && (
            <>
              <div
                className="card"
                style={{
                  width: "100%",
                  height: "100px",
                  marginTop: "10px",
                }}
              >
                <img
                  src="https://www.themediaant.com/blog/wp-content/uploads/2021/07/text-advertising-business-web-icons-behind-torn-white-paper-text-advertising-behind-torn-white-paper-132063555.jpg"
                  width={"100%"}
                  height="100%"
                />
              </div>
              <div
                className="card"
                style={{
                  marginTop: "10px",
                }}
              >
                <div className="card-body">
                  Oops, you dont have a profile photo! If you want to become
                  more popular and make more friends, upload your photo now!
                </div>
              </div>
            </>
          )}
          <AllRoute />
        </div>
      </div>
    </>
  );
};

export default App;
