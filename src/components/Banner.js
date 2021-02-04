import React, { Component } from "react";
import { Link } from "gatsby";
import Slider from "react-slick";

// Banner
import bannerbg from "../assets/img/banner/01.jpg";
const bannerpost = [
  {
    title: "Fast Certified & Flexible Solutions",
    text: "New and Improved Solutions",
    btn1text: "Get Started Now",
    btn2text: "Learn More"
  },
  {
    title: "Safe & Reliable Cargo Solutions",
    text: "Wholesale Real Estate",
    btn1text: "Get Started Now",
    btn2text: "Learn More"
  },
  {
    title: "Join Our Team",
    text: "Delivering solor power since 1995",
    btn1text: "Get Started Now",
    btn2text: "Learn More"
  }
];

class Banner extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      fade: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }
      ]
    };
    return (
      <section
        className="banner-section"
        style={{ backgroundImage: "url(" + bannerbg + ")" }}
      >
        <Slider className="slider-active" id="bannerSliderOne" {...settings}>
          {bannerpost.map((item, i) => (
            <div key={i} className="single-banner">
              <div className="container container-custom">
                <div className="row extra-left">
                  <div className="col-lg-8">
                    <div className="banner-text">
                      <h1
                        data-animation="fadeInUp"
                        data-delay=".7s"
                        style={{ animationDelay: "0.7s" }}
                      >
                        {item.title}
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".9s">
                        {item.text}
                      </p>
                      <div
                        className="btn-wrap"
                        data-animation="fadeIn"
                        data-delay="1.5s"
                      >
                        <Link to="/contact" className="main-btn btn-filled">
                          {item.btn1text}
                        </Link>
                        <Link to="/about" className="main-btn btn-borderd">
                          {item.btn2text}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="banner-shape-one" />
        <div className="banner-shape-two" />
      </section>
    );
  }
}

export default Banner;
