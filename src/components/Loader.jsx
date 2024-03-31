// components/Loader.js
import React from "react";
import Image from "next/image";

const Loader = () => {
  const loaderStyle = {
    width: "100%",
    height: "100vh",
    background: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={loaderStyle}>
      {/* <Image
        className="social-icon"
        src="https://ik.imagekit.io/3cnkjjvc1/sillymonster.io/SM_Logo_Animated_Transparent.gif"
        alt="monster-icon"
        width={100}
        height={100}
      /> */}
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
