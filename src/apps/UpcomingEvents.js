import React, { Component } from "react";
import EventImg from "../assets/images/thumbnailEvents.png";

export class UpcomingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsList: [
        {
          title: "Global Pharmaceutical Regulatory Affairs Summit",
          duration: "Monday, 8:00 AM - Tuesday, 8:00 PM",
          location: "Madisson Hotel",
          venue: "203 St. Mountain View, San Franciso, California, USA",
        },
        {
          title: "World Drug Safety Congress Europe",
          duration: "Monday, 8:00 AM - Tuesday, 8:00 PM",
          location: "Madisson Hotel",
          venue: "203 St. Mountain View, San Franciso, California, USA",
        },
        {
          title: "Real World Data and Analytics Centers of Excellence",
          duration: "Monday, 8:00 AM - Tuesday, 8:00 PM",
          location: "Madisson Hotel",
          venue: "203 St. Mountain View, San Franciso, California, USA",
        },
        {
          title: "4th Promotional Review Committee Compliance & Best Practice",
          duration: "Monday, 8:00 AM - Tuesday, 8:00 PM",
          location: "Madisson Hotel",
          venue: "203 St. Mountain View, San Franciso, California, USA",
        },
      ],
    };
  }

  render() {
    return (
      <div className="events-container-wrapper">
        <div className="events-container">
          <div className="event-title">Upcoming Events</div>
          {this.state.eventsList.map((value, index) => {
            return (
              <div key={index} className="d-flex event-detail">
                <div>
                  <img src={EventImg} alt="img"></img>
                </div>
                <div className="detailed-content">
                  <div className="event-name">{value.title}</div>
                  <div className="event-duration m-y-20">
                    <i className="fa fa-calendar-alt"></i>
                    <span className="m-l-20">{value.duration}</span>
                  </div>
                  <div className="event-location m-y-20">
                    <i className="fa fa-map-marker-alt"></i>
                    <span className="m-l-20 font_D3C3B4">{value.location}</span>
                  </div>
                  <div className="event-venue m-y-20">
                    <i className="fa fa-city"></i>
                    <span className="m-l-20">{value.venue}</span>
                  </div>
                  <div>
                    <button className="btn-read-more">Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
