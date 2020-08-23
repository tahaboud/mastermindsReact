import React, { Component } from "react";

export class Events extends Component {
  render() {
    return (
      <section>
        <div className="event-section" id="Events">
          <div className="event-header">
            <h2>Our Events</h2>
          </div>
          <div className="event event-1">
            <div className="imgBox">
              <img src={"../../static/frontend/images/open_day.jpg"} alt="" />
            </div>
            <div className="details">
              <h3>Open Day</h3>
              <p>
                Open Day is the day where we first meet with the new students
                especially and the rest of people generally and that's by
                introdcing the club and in a certain way .
              </p>
            </div>
          </div>
          <div className="event event-2">
            <div className="imgBox">
              <img
                src={"../../static/frontend/images/members_day.jpg"}
                alt=""
              />
            </div>
            <div className="details">
              <h3>Memebers Day</h3>
              <p>
                Morbi odio dui, rutrum ac arcu et, gravida fringilla ipsum.
                Proin tellus quam, tincidunt at ipsum sit amet, aliquet egestas.
              </p>
            </div>
          </div>
          <div className="event event-3">
            <div className="imgBox">
              <img src={"../../static/frontend/images/tabadul.jpg"} alt="" />
            </div>
            <div className="details">
              <h3>Tabadel</h3>
              <p>
                Morbi odio dui, rutrum ac arcu et, gravida fringilla ipsum.
                Proin tellus quam, tincidunt at ipsum sit amet, aliquet egestas.
              </p>
            </div>
          </div>
          <div className="event event-4">
            <div className="imgBox">
              <img
                src={"../../static/frontend/images/students_day.png"}
                alt=""
              />
            </div>
            <div className="details">
              <h3>Students Day</h3>
              <p>
                Morbi odio dui, rutrum ac arcu et, gravida fringilla ipsum.
                Proin tellus quam, tincidunt at ipsum sit amet, aliquet egestas.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Events;
