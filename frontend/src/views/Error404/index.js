import React from "react";
import "./styles.css";
import Exclamation404 from "../../assets/exclamation-404.svg";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    // <div className="container">
    <>
      <img src={Exclamation404} className="image404" alt="404" />
      <div className="notFoundMessage">Oops! Page not found</div>

      <div className="notFoundMessage" style={{ top: "73%" }}>
        <Link to="/" style={{ color: "black" }}>
          Navigate back to home
        </Link>
      </div>
    </>
  );
};
export default Error404;
