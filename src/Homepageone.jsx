import React from "react";
import "./homepageone.css";
import Image1container from "./images/Image1.png";

function Homepageone() {
  return (
    <>
      <div className="mainNavContainer">
        <img src={Image1container} alt="hero illustration" className="heroimage" />
        <div className="navItems">
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>
        <div className="contentContainer">
          <h6>start up 3</h6>
          <h1 className="heroContentHeader">forget about the code</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Eum nemo laudantium maiores illum molestiae labore aliquam id,
            quisquam,
            <br />
            inventore sit quas minima. Aspernatur fugiat labore voluptas
            obcaecati
            <br />
            sequi itaque expedita!
          </p>
          <button className="createacc">create account</button>
        </div>
      </div>
    </>
  );
}

export default Homepageone;
