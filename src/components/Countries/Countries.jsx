import React from "react";
import "./Countries.css";

const Countries = () => {
  return (
    <div className="containers">
      <h2 className="title">We are available in many well-known countries</h2>
      <div className="image-card">
        <div className="image-container">
          <img className="image" src="./Rectangle 9.png" alt="img" />
          <h3 className="image-text">AMERICA</h3>
        </div>
        <div className="image-container">
          <img className="image" src="./Rectangle 10.png" alt="img" />
          <h3 className="image-text">SPAIN</h3>
        </div>
        <div className="image-container">
          <img className="image" src="./Rectangle 11.png" alt="img" />
          <h3 className="image-text">LANDON</h3>
        </div>
        <div className="image-container">
          <img className="image" src="./Rectangle 12.png" alt="img" />
          <h3 className="image-text">FRANCH</h3>
        </div>
      </div>
    </div>
  );
};

export default Countries;
