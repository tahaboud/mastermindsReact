import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer-rights">
            <h4>&copy;2020, Masterminds Club, All Rights Reserved</h4>
          </div>
          <div className="contact-info">
            <div className="follow-us">
              <h5>Follow Us:</h5>
              <a
                href="https://www.facebook.com/MasterMinds.Oran/"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/masterminds_oran/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="call-us">
              <h5>Call Us:</h5>
              <h6>0655555555</h6>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
