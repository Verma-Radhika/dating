import React, {useState} from "react";

import { DrawerSide } from "./DrawerSide";
import { NavBarSide } from "./NavBarSide";

export const MainPageSide = () => {
    const [show ,setShow] = useState(false);

    const openFunc=()=>{
        setShow(!show);
    }
  return (
    <div
      style={{
        background: "#e5e5e5",
        width: "100%",
        height: "100vh",
      }}
    >
        <NavBarSide/>
        <DrawerSide state={setShow}
        show={show}
        openFunc={openFunc}
        />   
    </div>
  );
};
