import React, { Component } from "react";
import Logo from "../assets/images/logo.png";
import Twitter from "../assets/images/twitter.png";
import Facebook from "../assets/images/facebook.png";
import LinkedIn from "../assets/images/linkedin.png";

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-logo">
          <img src={Logo} alt="Logo"></img>
        </div>
        <div className="d-flex">
          <div className="scl-media-container">
            <div className="scl-media-box" title="Twitter">
              <img src={Twitter} alt="Logo"></img>
            </div>
            <div className="scl-media-box m-x-3" title="Facebook">
              <img className="m-l-5" src={Facebook} alt="Logo"></img>
            </div>
            <div className="scl-media-box" title="LinkedIn">
              <img src={LinkedIn} alt="Logo"></img>
            </div>
          </div>
          <div className="header-menu">
            MENU
            <span className="fa fa-bars m-x-3" title="Menu"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
