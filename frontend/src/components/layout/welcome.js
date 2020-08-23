import React, { Component } from "react";
import { Link } from "react-scroll";

export class Welcome extends Component {
  componentDidMount() {
    document.querySelector("body").classList.remove("home-body");
    document.querySelector("body").classList.remove("treasure-body");
    document.querySelector("body").classList.add("home-body");
    document.querySelector(".home").classList.add("active");
  }
  render() {
    return (
      <section name="Home">
        <div className="welcome-section">
          <div className="welcome-header">
            <h1>Welcome To Masterminds</h1>
          </div>
          <div className="welcome-description">
            <h5>One Purpose, One Mission, One Dream</h5>
          </div>
          <div className="welcome-description-desktop">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              praesentium natus officiis nihil beatae. Magnam totam itaque
              provident! Quod, quo?
            </p>
          </div>
          <div className="welcome-buttons">
            <a href="#" className="welcome-about-btn">
              About
            </a>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="welcome-contact-btn"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
