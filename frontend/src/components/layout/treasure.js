import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";

export class Treasure extends Component {
  componentDidMount() {
    document.querySelector("body").classList.remove("home-body");
    document.querySelector("body").classList.remove("treasure-body");
    document.querySelector("body").classList.add("treasure-body");
    document.querySelector(".treasure").classList.add("active");

    $(".level_default_option").click(function () {
      $(this).parent().toggleClass("active");
    });

    $(".level_select_ul li").click(function () {
      var currentele = $(this).html();
      $(".level_default_option li").html(currentele);
      $(this).parents(".select_wrap").removeClass("active");
    });

    $(".field_default_option").click(function () {
      $(this).parent().toggleClass("active");
    });

    $(".field_select_ul li").click(function () {
      var currentele = $(this).html();
      $(".field_default_option li").html(currentele);
      $(this).parents(".select_wrap").removeClass("active");
    });
  }

  getCourses = () => {
    const level = document.querySelector(".level_default_option li div").id;
    const field = document.querySelector(".field_default_option li div").id;
    if (level === "no") {
      document.querySelector(".courses-invalid-feedback").innerHTML =
        "Please choose a level";
      document.querySelector(".level_default_option").classList.add("invalid");
    } else if (field === "no") {
      document.querySelector(".courses-invalid-feedback").innerHTML =
        "Please choose a field";
      document
        .querySelector(".level_default_option")
        .classList.remove("invalid");
      document.querySelector(".level_default_option").classList.add("valid");
      document.querySelector(".field_default_option").classList.add("invalid");
    } else {
      document.querySelector(".courses-invalid-feedback").innerHTML = "";
      document
        .querySelector(".level_default_option")
        .classList.remove("invalid");
      document
        .querySelector(".field_default_option")
        .classList.remove("invalid");
      document.querySelector(".level_default_option").classList.add("valid");
      document.querySelector(".field_default_option").classList.add("valid");
      document.querySelector(".drive_courses_semester2").innerHTML = "";
      document.querySelector(".drive_courses_semester1").innerHTML = "";
      let urlId = [
        "l1elm",
        "",
        "l1gi",
        "",
        "l2elm",
        "",
        "l3elm",
        "",
        "m1elm",
        "",
        "m2elm",
        "",
        "l1hsi",
        "",
        "l2hsi",
        "",
        "l3hsi",
        "",
        "m1hsi",
        "",
        "m2hsi",
        "",
        "l2gi",
        "",
        "l3gi",
        "",
        "m1gi",
        "",
        "m2gi",
        "",
      ];
      var ids = urlId.indexOf(level + field) + 1;
      axios
        .get(`/url/${ids}`)
        .then((res) => {
          let ifram = document.createElement("iframe");
          ifram.setAttribute("src", res.data.url);
          ifram.setAttribute("height", "100%");
          ifram.setAttribute("width", "100%");
          ifram.setAttribute("frameBorder", "0");
          document.querySelector(".drive_courses_semester2").appendChild(ifram);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(`/url/${ids + 1}`)
        .then((res) => {
          let ifram = document.createElement("iframe");
          ifram.setAttribute(
            "src",
            "https://drive.google.com/embeddedfolderview?id=1VIp1sDeMGFUBrvOz4ISXw0dZA-dsz3iz#list"
          );
          ifram.setAttribute("height", "100%");
          ifram.setAttribute("width", "100%");
          ifram.setAttribute("frameBorder", "0");
          document.querySelector(".drive_courses_semester1").appendChild(ifram);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div>
        <section name="Home">
          <div className="welcome-section">
            <div className="welcome-header">
              <h1>Welcome To Masterminds's TREASURE</h1>
            </div>
            <div className="welcome-description">
              <h5>
                Feel free to use any document, and if you want to contribute
                press the button bellow.
              </h5>
            </div>
            <div className="welcome-description-desktop">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                praesentium natus officiis nihil beatae. Magnam totam itaque
                provident! Quod, quo?
              </p>
            </div>
            <div className="welcome-buttons">
              <a href="#Contact" className="welcome-contribute-btn">
                Contribute
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="courses">
            <div className="wrapper">
              <div className="title">Choose A Level</div>
              <div className="select_wrap level_wrap">
                <ul className="default_option level_default_option">
                  <li>
                    <div className="option choose" id="no">
                      <p>Choose a level ...</p>
                    </div>
                  </li>
                </ul>
                <ul className="select_ul level_select_ul">
                  <li>
                    <div className="option licence1" id="l1">
                      <p>Licence 1</p>
                    </div>
                  </li>
                  <li>
                    <div className="option licence2" id="l2">
                      <p>Licence 2</p>
                    </div>
                  </li>
                  <li>
                    <div className="option licence3" id="l3">
                      <p>Licence 3</p>
                    </div>
                  </li>
                  <li>
                    <div className="option master1" id="m1">
                      <p>Master 1</p>
                    </div>
                  </li>
                  <li>
                    <div className="option master2" id="m2">
                      <p>Master 2</p>
                    </div>
                  </li>
                  <li>
                    <div className="option doctorat" id="dc">
                      <p>Doctorat</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper">
              <div className="title">Choose A Field</div>
              <div className="select_wrap field_wrap">
                <ul className="default_option field_default_option">
                  <li>
                    <div className="option choose_field" id="no">
                      <p>Choose a field ...</p>
                    </div>
                  </li>
                </ul>
                <ul className="select_ul field_select_ul">
                  <li>
                    <div className="option elm" id="elm">
                      <p>Electromecanical (ELM)</p>
                    </div>
                  </li>
                  <li>
                    <div className="option hsi" id="hsi">
                      <p>Industrial Security and Hygiene (HSI)</p>
                    </div>
                  </li>
                  <li>
                    <div className="option gi" id="gi">
                      <p>Industrial Engineering (GI)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="courses-button-div">
              <button className="courses-button" onClick={this.getCourses}>
                Give me some courses
              </button>
              <div className="courses-invalid-feedback"></div>
            </div>
            <div className="smstr1">
              <div className="title">SEMESTER 1</div>
              <div className="drive_courses_semester1"></div>
            </div>
            <div className="smstr2">
              <div className="title">SEMESTER 2</div>
              <div className="drive_courses_semester2"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Treasure;
