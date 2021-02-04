import React, { Component } from "react";
import { Link } from "gatsby";
import Slider from "react-slick";

import img1 from "../assets/img/brand/01.png";
import img2 from "../assets/img/brand/02.png";
import img3 from "../assets/img/brand/03.png";
import img4 from "../assets/img/brand/04.png";
import img5 from "../assets/img/brand/05.png";
// clinet
const clinetpost = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img1 },
  { img: img2 },
  { img: img3 }
];
class Clients extends Component {
  render() {
    const clientsettings = {
      infinite: true,
      autoplay: false,
      arrows: false,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    };
    return (
      <div className="container-fluid custom-container-one">
        <Slider className="clinet-slider" {...clientsettings}>
          {clinetpost.map((item, i) => (
            <div key={i} className="clinet-item">
              <Link to="#">
                <img src={item.img} alt="" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Clients;
