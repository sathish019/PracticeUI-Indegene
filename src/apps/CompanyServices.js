import React, { Component } from "react";
import Layer11 from "../assets/images/Layer11.png";
import Layer12 from "../assets/images/Layer12.png";
import Layer13 from "../assets/images/Layer13.png";
import Layer14 from "../assets/images/Layer14.png";
import Layer15 from "../assets/images/Layer15.png";
import Layer16 from "../assets/images/Layer16.png";

export class CompanyServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesArray1: [
        {
          title: "Customer Experience",
          desc:
            "A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization",
          img: Layer11,
        },
        {
          title: "Data and Analytics",
          desc:
            "A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization",
          img: Layer12,
        },
        {
          title: "Digital Transformation",
          desc:
            "A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization",
          img: Layer13,
        },
      ],
      servicesArray2: [
        {
          title: "Co-commercialization",
          desc:
            "A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization",
          img: Layer14,
        },
        {
          title: "R&D / Medical Transformation",
          desc:
            "A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization",
          img: Layer15,
        },
        {
          title: "Omnipresence CXM Platform",
          desc:
            "A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization",
          img: Layer16,
        },
      ],
    };
  }

  render() {
    return (
      <div className="services-container-wrapper">
        <div className="services-container">
          <div className="text-center company-title">Company</div>
          <div className="text-center services-title">Services</div>
          <div className="d-flex d-space-around">
            <div>
              {this.state.servicesArray1.map((value, index) => {
                return (
                  <div key={index} className="d-flex m-a-40">
                    <div className="comp-services-content">
                      <div className="text-end services-content-title">
                        {value.title}
                      </div>
                      <div className="services-content-desc">{value.desc}</div>
                    </div>

                    <div className="comp-services-circle ">
                      <img src={value.img} alt="img"></img>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              {this.state.servicesArray2.map((value, index) => {
                return (
                  <div key={index} className="d-flex m-a-40">
                    <div className="comp-services-circle ">
                      <img src={value.img} alt="img"></img>
                    </div>

                    <div className="comp-services-content">
                      <div className="services-content-title">
                        {value.title}
                      </div>
                      <div className="services-content-desc">{value.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyServices;
