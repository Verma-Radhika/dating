import React, { useState } from "react";

export const DrawerSide = ({ show, state, openFunc }) => {
  return (
    <>
      {show ? (
        <div
          style={{
            background: "green",
            width: "20%",
            height: "80vh",
            position: "fixed",
            marginTop: "100px",
          }}
        >
          <button onClick={() => openFunc()}>hide</button>
        </div>
      ) : (
        <button
          style={{
            background: "green",
            marginTop: "100px",
          }}
          onClick={() => openFunc()}
        >
          Show
        </button>
      )}
    </>
  );
};
