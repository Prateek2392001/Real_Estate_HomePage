import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="Subscribe-container">
        <div>
          <img src="./public/Logo.png" alt="Logo" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="subscribe-logo">
          <img src="./src/assets/Logo/Facebook.png" alt="" />
          <img src="./src/assets/Logo/Twitter.png" alt="" />
          <img src="./src/assets/Logo/Instagram.png" alt="" />
          <img src="./src/assets/Logo/LinkedIn.png" alt="" />
        </div>
        <div className="subscribe-reserved">
          <p>@ 2024 .All rights reserved by Prateek Sri</p>
        </div>
      </div>
      <div className="take-a-tour">
        <h1>Take a Tour</h1>
        <li>Features</li>
        <li>Partners</li>
        <li>Pricing</li>
        <li>Product</li>
        <li>Support</li>
      </div>
      <div className="take-a-tour">
        <h1>Our Company</h1>
        <li>About Us</li>
        <li>Agents</li>
        <li>Blog</li>
        <li>Media</li>
        <li>Contact Us</li>
      </div>
      <div className="subscribe-section">
        <h1>Subscribe</h1>
        <p>
          subs Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          dignissimos, odio nostrum dolor eos minus quae quo suscipit, similique
          dolores alias maiores voluptate! Architecto at vel assumenda sed,
          dolores voluptatum.
        </p>
        <input class="email" type="text" placeholder="Email..." />
      </div>
    </div>
  );
};

export default Subscribe;
