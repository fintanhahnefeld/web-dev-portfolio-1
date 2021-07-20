import React from "react";
import "./Header.css";
import profile from "../imgs/profiler-1x.png";

const Header = () => {
  return (
    <div className="header-bg container-fluid">
      <div className="row py-5 d-flex justify-content-center align-items-center">
        <h1 className="col-4 mx-auto">
          Fintan Hahnefeld
          <br />
          Web Developer
        </h1>

        <img className="col-4 mx-auto" src={profile} alt="" />
      </div>
      <div className="row lineContainer">
        <div className="aniLine"></div>
      </div>
    </div>
  );
};

export default Header;
