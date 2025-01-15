import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="rectangle-box">
      <div className="contact-image">
        <img src="./building.png"></img>
      </div>

      <div className="contact-all">
        <h1 className="contact-heading">
          Find your best
          <br />
          Real Estate
        </h1>
        <p className="contact-paragraph">
          We provide a complete service for the sale,
          <br /> purchase or rental of real estate.
        </p>
      </div>
      <div className="contact-btn">
        <button className="contact-button">CONTACT US</button>
      </div>
    </div>
  );
};

export default Contact;
