import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

export class Header extends Component {
  componentDidMount() {
    document.body.style.overflowY = "visible";
  }
  navSlide = () => {
    const burger = document.querySelector(".humbergur");
    const navLinks = document.querySelector(".nav-item");
    const links = document.querySelectorAll(".nav-link");
    burger.classList.toggle("toggle");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
    if (document.body.style.overflowY === "visible") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };

  navHome = () => {
    const home = document.querySelector(".home");
    const treasure = document.querySelector(".treasure");
    treasure.classList.remove("active");
    home.classList.remove("active");
    home.classList.add("active");
    const navLinks = document.querySelector(".nav-item");
    if (navLinks.classList.contains("open")) {
      this.navSlide();
    }
  };
  navEvents = () => {
    const navLinks = document.querySelector(".nav-item");
    if (navLinks.classList.contains("open")) {
      this.navSlide();
    }
  };
  navTreasure = () => {
    const home = document.querySelector(".home");
    const treasure = document.querySelector(".treasure");
    treasure.classList.remove("active");
    home.classList.remove("active");
    treasure.classList.add("active");
    const navLinks = document.querySelector(".nav-item");
    if (navLinks.classList.contains("open")) {
      this.navSlide();
    }
  };
  navContact = () => {
    const navLinks = document.querySelector(".nav-item");
    if (navLinks.classList.contains("open")) {
      this.navSlide();
    }
  };

  render() {
    return (
      <header>
        <nav>
          <div className="nav-bar">
            <ul className="logo">
              <img
                src={"../../static/frontend/images/Asset1.png"}
                alt="logo"
                className="logo-img"
              />
            </ul>
            <ul className="nav-item">
              <li className="nav-link home">
                <HashLink to="" onClick={this.navHome}>
                  Home
                </HashLink>
              </li>
              <li className="nav-link events">
                <HashLink to="/#Events" onClick={this.navEvents}>
                  Events
                </HashLink>
              </li>
              <li className="nav-link treasure">
                <HashLink to="/treasure" onClick={this.navTreasure}>
                  Treasure
                </HashLink>
              </li>
              <li className="nav-link contact">
                <HashLink to="/#Contact" onClick={this.navContact}>
                  Contact
                </HashLink>
              </li>
            </ul>
            <div className="humbergur" onClick={this.navSlide}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
