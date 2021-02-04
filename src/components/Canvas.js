import React, { Component, Fragment } from "react";
import { Link } from "gatsby";

import img1 from "../assets/img/laest-post/01.jpg";
import img2 from "../assets/img/laest-post/02.jpg";
import img3 from "../assets/img/laest-post/03.jpg";

const recentpost = [
  {
    img: img1,
    title: "Signs moved moveth itself on years whose without.",
    date: "4 May.2020"
  },
  {
    img: img2,
    title: "Under brought airte them saw stars created seas.",
    date: "4 May.2020"
  },
  {
    img: img3,
    title: "Our form there seas set forth fill bearing.",
    date: "4 May.2020"
  }
];

class Canvas extends Component {
  render() {
    return (
      <div>
        <div className="widget recent-post">
          <h4 className="widget-title">Recent Posts</h4>
          <ul>
            {recentpost.map((item, i) => (
              <li key={i}>
                <div
                  className="post-img"
                  style={{ backgroundImage: "url(" + item.img + ")" }}
                ></div>
                <div className="post-content">
                  <h6>
                    <Link to="/blog-details">{item.title}</Link>
                  </h6>
                  <span className="time">
                    <i className="far fa-clock" />
                    {item.date}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="widget contact-widget">
          <h4 className="widget-title">Contact Us</h4>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              305 Royal Track Suite 019, USA
            </li>
            <li>
              <i className="far fa-phone" />
              <Link to="#">+10910-910920</Link>
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <Link to="#">support@solax.com</Link>
            </li>
          </ul>
        </div>
        <div className="widget social-widget">
          <h4 className="widget-title">Follow Us</h4>
          <ul>
            <li>
              <Link to="#">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="#">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="#">
                <i className="fab fa-behance" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Canvas;
