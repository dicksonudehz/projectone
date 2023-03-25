import React from "react";
import phoneimg from "./images/iphonex.png";
import "./HomepageTwo.css";

function HomepageTwo() {
  return (
    <>
      <div className="mainContainer">
        <div className="leftContainer">
          <h6>startup 3</h6>
          <h1>
            Beautiful <br />
            Startup <br />
            Framework for
            <br /> Your Next Project
          </h1>
          <p>
            A high-quality solution for those <br /> who want a bea-utiful
            startup
            <br />
            website quickly.
          </p>
          <button className="downnloadbutton">download from app store</button>
        </div>
        <div className="rightContainer">
          <div className="empty"></div>
          <img src={phoneimg} alt="illustration " />
        </div>
      </div>
    </>
  );
}

export default HomepageTwo;
