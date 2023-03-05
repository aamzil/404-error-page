import React from "react";
import "./NotFound.css";
import { HiArrowNarrowLeft } from "react-icons/hi";

function NotFound() {
  return (
    <div className="notfound animate__animated animate__fadeIn">
      <div className="notfound__img ">
        <img
          className=""
          src="https://doodleipsum.com/600/hand-drawn?i=0b3f4112a9c5e358c439c4be74380e54"
          alt=""
        />
      </div>

      <div className="notfound__message">
        <h1>404</h1>
        <h3>Oops! page not found.</h3>
        <p>
          This page doesn't exist or was removed! <br />
          We suggest you back to Home.
        </p>
        <div className="button ">
          <HiArrowNarrowLeft className="leftarrow animate__animated animate__headShake" />
          <h4>Back to Home</h4>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
