import React, { Component } from "react";
import BlogsImg from "../assets/images/thumbnailBlogs.png";

export class RecentBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogsList: [
        {
          date: "18",
          month: "January",
          year: "2021",
          title: "Press Release",
          desc:
            "Indegene Acquires DT Associates, Provides End-To-End Enterprise Solution for Customer Excellence — from Consulting to Operations",
        },
        {
          date: "19",
          month: "February",
          year: "2021",
          title: "Webinars",
          desc:
            "Healthy Workplaces Conference & Awards 2019 - Indegene enters Platinum League of Healthy Workplaces",
        },
        {
          date: "20",
          month: "March",
          year: "2021",
          title: "Press Release",
          desc:
            "Exemplary PV solution to augment efficiency in small and medium size pharma companies",
        },
      ],
    };
  }
  render() {
    return (
      <div className="blogs-container-wrapper">
        <div className="blogs-container">
          <div className="text-center blog-title">Recent Blog</div>
          <div className="text-center blog-subtitle">Our Blog</div>
          <div className="blog-list d-flex d-space-around">
            {this.state.blogsList.map((value, index) => {
              return (
                <div key={index} className="blog-list-content">
                  <div>
                    <img src={BlogsImg} alt="img"></img>
                  </div>
                  <div className="d-flex">
                    <div className="blog-time">
                      <div className="text-center blog-day">{value.date}</div>
                      <div className="text-center blog-month">{value.month}</div>
                      <div className="text-center blog-year">{value.year}</div>
                    </div>
                    <div className="blog-detail">
                      <div className="blog-name">{value.title}</div>
                      <div className="blog-desc">{value.desc}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RecentBlogs;
