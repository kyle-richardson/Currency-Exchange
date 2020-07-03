import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="start-container">
      <h1>Convert USD to all other currencies worldwide!</h1>
      <p>
        Just enter the USD amount, and the app automatically updates the
        conversion rates in real time*. You can also search for specific
        currency or country names.
      </p>
      <Link to="/rates">
        <div className="start-button" style={{ marginBottom: "40px" }}>
          Get Rates!
        </div>
      </Link>
      <div style={{ fontSize: ".8rem" }}>
        <span>
          * While the app itself updates immediately, the data it is fetching
          exchange rates from is not updated in real time. We are utilizing{" "}
        </span>
        <a
          href="https://openexchangerates.org/"
          style={{ textDecoration: "underline", fontSize: ".8rem" }}
        >
          Open Exchange Rates API
        </a>
        <span>, which updates rates hourly.</span>
      </div>
    </div>
  );
};

export default Start;
