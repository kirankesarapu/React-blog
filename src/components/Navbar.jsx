import React , {useState} from "react";
import { menu } from "../assets";

const Navbar = () => {
    
  return (
    <div className="Navbar">
      <div className="Container">
        <img src={menu} alt="Menu" className="MenuIcon"></img>
        <div className="Nav_list">
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Support</ul>
          <ul>Pricing</ul>
        </div>
        <div className="ButtonGroup"> 
          <button className="Login">LOGIN</button>
          <button className="Register">REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
