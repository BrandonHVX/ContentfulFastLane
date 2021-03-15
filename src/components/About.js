import React, { Component } from "react";

import aboutimg1 from "../assets/img/tile-gallery/04.jpg";
import aboutimg2 from "../assets/img/tile-gallery/05.jpg";
import aboutexp from "../assets/img/experience-tag.png";

class About extends Component {
  render() {
    return (
      <section className="about-section about-style-three pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="about-tile-gallery-two">
                <img src={aboutimg1} alt="" className="image-one" />
                <img src={aboutimg2} alt="" className="image-two" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="about-text pl-30">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">About us</span>
                  <h2>We help businesses elevate their solar.</h2>
                </div>
                <p>
                  With more than four decades of proven success in quality solar
                  services, Shelder solar and Retro-Fit group is a family-owned
                  &amp; operated business serving the greater San Fransisco area
                  state.Our expert team has been dedicated to providing the best
                  service and quality available.
                </p>
                <div className="about-extra">
                  Shelder solar &amp; Retro-Fit group is a family-owned &amp;
                  operated business serving the greater San Fransisco. In 1991
                  we expanded our outstanding service lists.
                  <div className="experience-tag">
                    <img src={aboutexp} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
