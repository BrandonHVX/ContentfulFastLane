import React, { Component } from "react";
import { Link } from "gatsby";

import icon1 from "../assets/img/svg/interior-energy.svg";
import icon2 from "../assets/img/svg/modified-solar.svg";
import icon3 from "../assets/img/svg/security.svg";

const servicesblock = [
  {
    icon: icon1,
    title: "Expedited Delivery",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon2,
    title: "Fastlane Final Mile",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon3,
    title: "Long Hual",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon2,
    title: "Warehousing",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  }
];
class Services extends Component {
  render() {
    return (
      <section className="services-secton services-secton-three pt-120 pb-120">
        <div className="container">
          {/* Section Title */}
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-8 col-sm-7">
              <div className="section-title left-border">
                <span className="title-tag">our services</span>
                <h2>SUPERIOR SOLUTIONS THAT GO THE EXTRA MILE</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-5 d-none d-sm-block">
              <div className="service-page-link- text-right">
                <Link to="/services" className="main-btn btn-filled">
                  learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="services-loop mt-50">
            <div className="row justify-content-center">
              {servicesblock.map((item, i) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                  <div className="single-service-two white-bg">
                    <div className="top-icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <div className="bottom-icon">
                      <img src={item.icon} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
