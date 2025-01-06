import React from "react";
import Nav from "./components/Navbar/nav";
import Countries from "./components/Countries/Countries";
import Recently from "./components/Recently/Recently";
import Contact from "./components/ContactUs/Contact";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
  return (
    <div>
      <Nav />
      <Countries />
      <Recently />
      <Contact />
      <Subscribe />
    </div>
  );
};

export default App;
