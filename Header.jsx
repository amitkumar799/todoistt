import React from "react";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
  <header className="header">
   <nav className="nav">
       <div className="logo">
           <img src={logo} alt="todoist"></img>
       </div>
   </nav>
  </header>
  );
};

export default Header;