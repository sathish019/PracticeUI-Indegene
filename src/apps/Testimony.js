import React, { Component } from "react";

export class Testimony extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRoles: [
        {
          desc:
            "As the President, he is responsible for new strategic initiatives.",
          title: "President",
        },
        {
          desc:
            "As one of the cofounders and the CEO, He is responsible for the company’s strategy.",
          title: "CEO",
        },
        {
          desc:
            "Is responsible for global business development and strategic account management.",
          title: "Executive VP",
        },
      ],
    };
  }
  render() {
    return (
      <div className="testimony-container">
        <div className="text-center testimony-title">
          INSPIRATIONAL TESTIMONY
        </div>
        <div className="d-flex">
          {this.state.userRoles.map((value, index) => {
            return (
              <div key={index} className="user-roles">
                <div>
                  <i className="fa fa-user-circle"></i>
                </div>
                <div className="testimony-desc">{value.desc}</div>
                <div className="user-desig">{value.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Testimony;
