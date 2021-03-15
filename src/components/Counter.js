import React, { Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "gatsby";

import ctaimg from "../assets/img/cta/driver.jpg";
const countpost = [
  { count: "299", prefix: "+", title: "Project Done" },
  { count: "177", prefix: "+", title: "Active Client" },
  { count: "5", prefix: "K+", title: "Drink Coffee" },
  { count: "69", prefix: "K+", title: "Award winning" }
];

export default function Counter() {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="container">
      <div className="counter-inner">
        {" "}
        <div className="cta-inner">
          <div className="cta-text diff-bg">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-md-7 col-sm-10">
                <div className="section-title pl-30 left-border">
                  <span className="title-tag">Shipping</span>
                  <h2>Request A Quote</h2>
                  <p>
                    Taking care of each other. Quality, comprehensive benefits.
                    Open communications. Valuing every person. Explore your next
                    career move in our family-owned organization.
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
    </div>
  );
}
