import React, { Component } from "react";
import { Tab, Nav } from "react-bootstrap";

import frameworkimg from "../assets/img/framework.jpg";
import icon1 from "../assets/img/svg/consultation.svg";
import icon2 from "../assets/img/svg/proposal.svg";
import icon3 from "../assets/img/svg/installation.svg";
import icon4 from "../assets/img/svg/inspection.svg";

class Process extends Component {
  render() {
    return (
      <section className="framework-section padding-bottom-extra">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="framework-img">
                <img src={frameworkimg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="framework-text pl-20">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">Process</span>
                  <h2> Our Standard Working Process. </h2>
                </div>
                <Tab.Container defaultActiveKey="wordpress">
                  <Tab.Content>
                    <Tab.Pane eventKey="phython">
                      <p>
                        With more than four decades of proven success in quality
                        solar services, Shelder solar and Retro-Fit group is a
                        family-owned & operated business serving the greater San
                        Fransisco area state.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="wordpress">
                      <p>
                        With more than four decades of proven success in quality
                        solar services, Shelder solar and Retro-Fit group is a
                        family-owned & operated business serving the greater San
                        Fransisco area state.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="html">
                      <p>
                        With more than four decades of proven success in quality
                        solar services, Shelder solar and Retro-Fit group is a
                        family-owned & operated business serving the greater San
                        Fransisco area state.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="java">
                      <p>
                        With more than four decades of proven success in quality
                        solar services, Shelder solar and Retro-Fit group is a
                        family-owned & operated business serving the greater San
                        Fransisco area state.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                  <Nav
                    variant="pills"
                    className="framework-list nav nav-pills mt-25"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="phython">
                        <span className="icon">
                          <img src={icon1} alt="" />
                        </span>
                        Consultation
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="wordpress">
                        <span className="icon">
                          <img src={icon2} alt="" />
                        </span>
                        Proposal
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="html">
                        <span className="icon">
                          <img src={icon3} alt="" />
                        </span>
                        Installation
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="java">
                        <span className="icon">
                          <img src={icon4} alt="" />
                        </span>
                        Inspection
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Process;
