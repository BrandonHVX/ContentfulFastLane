import React, { Component } from "react";
import { Link } from "gatsby";
import Canvas from "./Canvas";
import Menu from "./Menu";
import classNames from "classnames";

import logowhite from "../assets/img/logo-white.png";
import logo from "../assets/img/logo.png";

class JobHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasmethod: false,
      togglemethod: false
    };
    this.openCanvas = this.openCanvas.bind(this);
    this.closeCanvas = this.closeCanvas.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }
  // Off Canvas
  openCanvas() {
    this.setState({
      canvasmethod: true
    });
  }
  closeCanvas() {
    this.setState({
      canvasmethod: false
    });
  }
  toggleClass() {
    this.setState({
      togglemethod: !this.state.togglemethod
    });
  }
  componentDidMount() {
    window.addEventListener(
      "scroll",
      () => {
        this.setState({
          isTop: window.scrollY > 110
        });
      },
      false
    );
  }
  render() {
    const stickyheader = this.state.isTop ? "sticky" : "";
    return (
      <header
        className={`header-absolute header-three sticky-header ${stickyheader}`}
      >
        <div className="container-fluid custom-container-two">
          <div className="mainmenu-area">
            <div className="d-flex align-items-center justify-content-between">
              <nav className="main-menu">
                <div className="logo">
                  <Link to="/">
                    <img src={logowhite} alt="" className="normal-logo" />
                    <img src={logo} alt="" className="sticky-logo" />
                  </Link>
                </div>
                <div
                  className={classNames("menu-items", {
                    "menu-on": this.state.togglemethod
                  })}
                >
                  <Menu />
                </div>
              </nav>
              <div className="main-right">
                <Link to="/contact" className="main-btn btn-filled">
                  Get A Quote
                </Link>
                <Link
                  to="#"
                  className="offcanvas-trigger"
                  onClick={this.openCanvas}
                >
                  <i className="far fa-ellipsis-v" />
                </Link>
                {/* OFF CANVAS WRAP START */}
                <div
                  className={classNames("off-canvas-wrap", {
                    "show-off-canvas": this.state.canvasmethod
                  })}
                >
                  <div
                    className={classNames("overly", {
                      "show-overly": this.state.canvasmethod
                    })}
                    onClick={this.closeCanvas}
                  ></div>
                  <div className="off-canvas-widget">
                    <Link
                      to="#"
                      className="off-canvas-close"
                      onClick={this.closeCanvas}
                    >
                      <i className="fal fa-times" />
                    </Link>
                    <Canvas />
                  </div>
                </div>
                {/* OFF CANVAS WRAP END */}
              </div>
              {/* Mobile Trigger */}
              <Link
                to="#"
                className={classNames("mobile-trigger", {
                  active: this.state.togglemethod
                })}
                onClick={this.toggleClass}
              >
                <span />
                <span />
                <span />
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default JobHeader;
