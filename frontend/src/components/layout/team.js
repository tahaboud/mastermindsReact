import React, { Component } from "react";
import Swiper, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../common/style.css";

export class Team extends Component {
  componentDidMount() {
    Swiper.use([Navigation, Pagination, EffectCoverflow]);
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      simulateTouch: true,
      initialSlide: 5,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  render() {
    return (
      <section id="Team">
        <div className="team-section">
          <div className="team-header">
            <h2>Meet Our Team</h2>
            <hr />
          </div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="img">
                  <img src="http://lorempixel.com/600/600/nature/1" alt="" />
                </div>
                <div className="details">
                  <h3>
                    John Doe <br />
                    <span>Web Designer</span>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img src="http://lorempixel.com/600/600/nature/2" alt="" />
                </div>
                <div className="details">
                  <h3>
                    John Doe <br />
                    <span>Web Designer</span>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img src="http://lorempixel.com/600/600/nature/3" alt="" />
                </div>
                <div className="details">
                  <h3>
                    John Doe <br />
                    <span>Web Designer</span>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img src="http://lorempixel.com/600/600/nature/4" alt="" />
                </div>
                <div className="details">
                  <h3>
                    John Doe <br />
                    <span>Web Designer</span>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img
                    src={"../../static/frontend/images/LokmanBoufenar.jpg"}
                    alt=""
                  />
                </div>
                <div className="details">
                  <h3>
                    lokman Boufenar <br />
                    <span>Head of H.R</span>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img
                    src={"../../static/frontend/images/NadirZedek.jpg"}
                    alt=""
                  />
                </div>
                <div className="details">
                  <h3>
                    Nadir Zedek <br />
                    <span>Club President</span>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img
                    src={"../../static/frontend/images/YounesLabri.jpg"}
                    alt=""
                  />
                </div>
                <div className="details">
                  <h3>
                    Younes Labri <br />
                    <span>Exterior Relations</span>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img src="http://lorempixel.com/600/600/nature/8" alt="" />
                </div>
                <div className="details">
                  <h3>
                    John Doe <br />
                    <span>Web Designer</span>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img src="http://lorempixel.com/600/600/nature/9" alt="" />
                </div>
                <div className="details">
                  <h3>
                    John Doe <br />
                    <span>Web Designer</span>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="img">
                  <img src="http://lorempixel.com/600/600/nature/10" alt="" />
                </div>
                <div className="details">
                  <h3>
                    John Doe <br />
                    <span>Web Designer</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
