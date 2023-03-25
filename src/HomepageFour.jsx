import "./homepagefour.css";
import heroiphonexfour from "./images/img2.png";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

function HomepageFour() {
  return (
    <>
      <div className="mainContainerFour">
        <nav>
          <DensityMediumIcon />
        </nav>
        <div className="mainBodyContentContainer">
          <div className="mainBodyContentContainer">
            <div className="mainContainerLeft">
              <img src={heroiphonexfour} alt="illustration content" />
            </div>
            <div className="mainContentRight">
              <h3>startup 3</h3>
              <h1>
                Let’s make
                <br />
                design fast
                <br />
                and easy
              </h1>
              <p>
                The most important part of the <br />
                Startup Framework is the samples. <br />
                The samples form a set of 25 usable <br />
                pages you can use as is or you can ad <br />
                new blocks from UI Kit.
              </p>
              <button className="buttonContainer">get started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageFour;
