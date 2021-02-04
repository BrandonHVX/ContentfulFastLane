import React, { Component } from "react";
import { Link } from "gatsby";

import icon1 from "../assets/img/svg/interior-energy.svg";
import icon2 from "../assets/img/svg/modified-solar.svg";
import icon3 from "../assets/img/svg/single-ply.svg";
import icon4 from "../assets/img/svg/security.svg";
import icon5 from "../assets/img/svg/single-ply.svg";
import icon6 from "../assets/img/svg/panel-setup.svg";
import icon7 from "../assets/img/svg/built-up-solar.svg";
import icon8 from "../assets/img/svg/support.svg";

// Services
const serviceblock = [
  {
    icon: icon1,
    title: "Interior Energy",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon2,
    title: "Modified solar",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon3,
    title: "Single Ply solar",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon4,
    title: "High Security",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon5,
    title: "Single Ply solar",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon6,
    title: "Panel Setup",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon7,
    title: "Built-Up solar",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  },
  {
    icon: icon8,
    title: "Team Support",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid."
  }
];
class Services extends Component {
  render() {
    return (
      <section className="services-secton services-secton-two pt-120 pb-120">
        <div className="container">
          {/* Section Title */}
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-8 col-sm-7">
              <div className="section-title left-border">
                <span className="title-tag">our services</span>
                <h2>We Provide Superior solar Services with good passions</h2>
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
              {serviceblock.map((item, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                  <div className="single-service-two">
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
