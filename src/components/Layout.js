import React from "react";
import "../assets/scss/style.scss";
import "../assets/css/font-awesome.min.css";
import "../assets/css/default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/default.css";
import "react-circular-progressbar/dist/styles.css";

const Layout = props => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
