import React, { Component } from "react";
import axios from "axios";

export class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  onChange = (e) => {
    document.querySelector("#" + e.target.name).classList.remove("invalid");
    document.querySelector(
      "." + e.target.name + "-invalid-feedback"
    ).innerHTML = "";
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    document.querySelector("#name").classList.add("valid");
    document.querySelector("#email").classList.add("valid");
    document.querySelector("#message").classList.add("valid");
    const config = {
      headears: {
        "Content-Type": "application/json",
      },
    };
    const { name, email, message } = this.state;
    axios
      .post("/contact/", this.state, config)
      .then((res) => {
        document.querySelector("#name").classList.remove("invalid");
        document.querySelector("#email").classList.remove("invalid");
        document.querySelector("#message").classList.remove("invalid");
        document.querySelector("#name").classList.add("valid");
        document.querySelector("#email").classList.add("valid");
        document.querySelector("#message").classList.add("valid");
        this.setState({
          name: "",
          email: "",
          message: "",
        });
        document.querySelector("#name").classList.remove("valid");
        document.querySelector("#email").classList.remove("valid");
        document.querySelector("#message").classList.remove("valid");
      })
      .catch((res) => {
        for (let [key, value] of Object.entries(res.response.data.errors)) {
          let feedback = document.querySelector(
            "." + key + "-invalid-feedback"
          );
          feedback.innerHTML = value[0];
          document.querySelector("#" + key).classList.remove("valid");
          document.querySelector("#" + key).classList.add("invalid");
        }
      });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <section id="Contact">
        <div className="contact-section">
          <div className="contact-header">
            <h2>Contact Us</h2>
          </div>
          <div className="contact-form">
            <form onSubmit={this.onSubmit}>
              <div className="user-info">
                <div className="name">
                  <label htmlFor="name">Full Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onChange}
                    value={name}
                  />
                  <div className="name-invalid-feedback"></div>
                </div>
                <div className="email">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={this.onChange}
                    value={email}
                  />
                  <div className="email-invalid-feedback"></div>
                </div>
              </div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                onChange={this.onChange}
                value={message}
              ></textarea>
              <div className="message-invalid-feedback"></div>
              <div className="button">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
