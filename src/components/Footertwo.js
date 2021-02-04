import React, { Component, Fragment } from "react";
import Backtotop from "./Backtotop";
import { Link } from "gatsby";

import logo from "../assets/img/fastlane-transfer-alt.png";

import img1 from "../assets/img/recent-post-wid/01.jpg";
import img2 from "../assets/img/recent-post-wid/02.jpg";
import img3 from "../assets/img/recent-post-wid/03.jpg";

const newsfeeds = [
  {
    img: img1,
    title: "Managing Partner along with Senior Counsels.",
    date: "14th Aug 2020"
  },
  {
    img: img2,
    title: "Managing Partner along with Senior Counsels.",
    date: "14th Aug 2020"
  },
  {
    img: img3,
    title: "Managing Partner along with Senior Counsels.",
    date: "14th Aug 2020"
  }
];

class Footertwo extends Component {
  render() {
    return (
      <Fragment>
        <Backtotop />
        <footer>
          <div className="footer-top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <div className="logo text-center text-sm-left">
                    <Link to="/">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="social-icon text-center text-sm-right">
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-behance" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-youtube" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* widgets */}

          {/* copyright */}
          <div className="copy-right-area">
            <div className="container">
              <div className="copyrigt-text d-sm-flex justify-content-center">
                <p>
                  Copyright By <Link to="#">Fast Lane Transfer</Link> - 2020
                </p>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footertwo;
