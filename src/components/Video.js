import React, { Component } from "react";
import { Link } from "gatsby";
import $ from "jquery";

import videobg from "../assets/img/video-bg.jpg";

class Video extends Component {
  render() {
    return (
      <section className="video-section">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-end">
            <div className="col-lg-5 col-md-8">
              <div className="video-text pl-30">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">intro video</span>
                  <h2>Let’s make an office tour from here.</h2>
                </div>
                <p>
                  With more than four decades of proven success in quality solar
                  services, Shelder solar and Retro-Fit group is a family-owned
                  &amp; operated business serving the greater San Fransisco area
                  state.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Video-wrap */}
        <div className="video-wrap">
          <div
            className="video-bg"
            style={{ backgroundImage: "url(" + videobg + ")" }}
          >
            <div className="video-link">
              <Link
                to="https://www.youtube.com/embed/pbiEfJd2Hpw"
                className="popup-video popup-youtube"
              >
                play
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Video;
