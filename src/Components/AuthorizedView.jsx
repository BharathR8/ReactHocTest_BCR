import React from "react";
import withAuthorization from "../Hoc/ParentComponent";
import "../Static/Css/AuthPageView.css";

const AuthorizedView = ({ logout, isAuthorized }) => {
  if (isAuthorized) {
    return (
      <div className="container">
        <h1>Authorized</h1>
        <button className="log" onClick={logout}>
          Logout
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default withAuthorization(AuthorizedView);
