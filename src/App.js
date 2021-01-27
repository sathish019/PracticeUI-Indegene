import React, { Component } from "react";
import Header from "./apps/Header";
import Marketing from "./apps/Marketing";
import CompanyServices from "./apps/CompanyServices";
import Testimony from "./apps/Testimony";
import UpcomingEvents from "./apps/UpcomingEvents";
import RecentBlogs from "./apps/RecentBlogs";
import Footer from "./apps/Footer";
export class App extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <Marketing />
        <CompanyServices />
        <Testimony />
        <UpcomingEvents />
        <RecentBlogs />
        <Footer />
      </div>
    );
  }
}

export default App;
