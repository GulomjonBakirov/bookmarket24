import React from "react";
import "../styles/components/downloadView.css";

export default function DownloadView() {
  return (
    <div className="downloadView">
      <h1 className="title" align="center">
        Tingla BM24
      </h1>
      <div className="download">
        <div className="downloadImg">
          <img
            src="assets/images/download.png"
            alt="Download Mobile App logo"
          />
        </div>
        <div className="downloadDescription">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            eum minima! Minima voluptate quaerat nemo debitis optio recusandae,
            libero repellendus quibusdam ea provident maxime at suscipit nam
            quam? Sequi, nisi.Lor
          </p>
        </div>
        <div className="mobile">
          <a href="https://github.com/GulomjonBakirov">
            <img src="assets/images/appstore.jpg" alt="App Store" />
          </a>
          <a href="https://github.com/GulomjonBakirov">
            <img src="assets/images/googleplay.jpg" alt="Google Play" />
          </a>
        </div>
      </div>
    </div>
  );
}
