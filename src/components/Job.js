import React, { Component } from "react";
import { Link } from "gatsby";

import ctaimg from "../assets/img/cta/driver.jpg";

class Job extends Component {
  render() {
    return (
      <section className="call-to-action cta-style-two">
        <div className="container">
          <div className="cta-inner">
            <div className="cat-img">
              <div className="cat-shape shape-two">
                <img src={ctaimg} alt="" />
              </div>
            </div>
            <div className="cta-text diff-bg">
              <div className="row align-items-center justify-content-end">
                <div className="col-lg-6 col-md-7 col-sm-10">
                  <div className="section-title pl-30 left-border">
                    <span className="title-tag">Career Opprotunities</span>
                    <h2>JOIN THE TEAM.</h2>
                    <p>
                      Taking care of each other. Quality, comprehensive
                      benefits. Open communications. Valuing every person.
                      Explore your next career move in our family-owned
                      organization.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-2 col-sm-2">
                  <div className="link-wrap text-center">
                    <Link to="/why-us" className="main-btn btn-filled">
                      lEARN MORE
                    </Link>
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

export default Job;
