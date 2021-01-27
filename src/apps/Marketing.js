import React, { Component } from "react";

export class Marketing extends Component {
  render() {
    return (
      <div className="marketing-section">
        <div className="mkt-container-1">
          <div>
            <div className="mkt-title">
              Enterprise Marketing and Customer Experience
            </div>
            <div className="mkt-subtitle">
              Leverage data to drive personalization at scale
            </div>
            <div className="mkt-options">
              <button className="btn-7f">The Global Transition </button>
              <button className="m-l-10 btn-white">
                <i className="fa fa-play-circle m-r-5"></i>
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="mkt-container-2">
          <div className="mkt-bg-left">
            <div className="mkt-pharma-title">
              The Digital savvy pharma marketer 2020
            </div>
            <div className="mkt-pharma-subtitle">
              “Must have tool for every pharma marketer”
            </div>
            <div className="tool-download">
              <button className="btn-white">
                <i className="fa fa-play-circle m-r-5"></i>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Marketing;
