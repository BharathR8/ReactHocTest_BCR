import React from "react";
import "../Static/Css/AuthPageView.css";

const UnauthorizedView = ({ login, isAuthorized }) => {
  if (!isAuthorized) {
    return (
      <div className="container">
        <h1>Not Authorized</h1>
        <button className="log" onClick={login}>
          Login
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default UnauthorizedView;
