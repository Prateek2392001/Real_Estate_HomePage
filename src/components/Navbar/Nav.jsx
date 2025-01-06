import React from "react";
import "./styles.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="./public/Logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="home">HOME</a>
          </li>
          <li>
            <a href="properties">PROPERTIES</a>
          </li>
          <li>
            <a href="agents">AGENTS</a>
          </li>
          <li>
            <a href="blog">BLOG</a>
          </li>
        </ul>
        <div className="login-button">
          <button>Log In</button>
        </div>
      </nav>
      <div className="image">
        <img src="./public/BannerImage.png"></img>
        <h1 className="heading">Easy Way To Find a Perfect Property </h1>
        <p className="Paragraph">
          We provide a complete service for the sale, purchase or rental of real
          estate.
        </p>
        <div class="word-container">
          <span class="word">
            RENT
            <div class="popup">
              <p>
                <strong>Location:</strong> <br /> Select Youe City
              </p>
              <img src="./src/assets/Logo/Group 3.png" alt="" />
              <p>
                <strong>Property Type:</strong> <br />
                Choose Property Type
              </p>
              <p>
                <strong>Price Range:</strong>
                <br /> Choose Price Range
              </p>
              <img src="./src/assets/Logo/search button.png" alt="" />
            </div>
          </span>
          <span class="word">
            BUY
            <div class="popup">
              <p>
                <strong>Location:</strong> <br /> Select Youe City
              </p>
              <p>
                <strong>Property Type:</strong> <br />
                Choose Property Type
              </p>
              <p>
                <strong>Price Range:</strong>
                <br /> Choose Price Range
              </p>
            </div>
          </span>
          <span class="word">
            SELL
            <div class="popup">
              <p>
                <strong>Location:</strong> <br /> Select Youe City
              </p>
              <p>
                <strong>Property Type:</strong> <br />
                Choose Property Type
              </p>
              <p>
                <strong>Price Range:</strong>
                <br /> Choose Price Range
              </p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
