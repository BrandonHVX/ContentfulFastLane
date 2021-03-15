import React, { Component } from "react";
import RegisterUser from "./RegisterUser";

// about
import aboutimg from "../assets/img/about/about-2.jpg";
import expimg from "../assets/img/experience-tag.png";

class JobForm extends Component {
  render() {
    return (
      <div class="container">
        <RegisterUser />
      </div>
    );
  }
}

export default JobForm;
