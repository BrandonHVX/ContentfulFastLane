import React, { Component } from "react";
import { Link } from "gatsby";

const navigationmenu = [
  {
    id: 1,
    linkText: "Home",
    child: true,
    submenu: [
      {
        id: 11,
        link: "/",
        linkText: "Home One"
      },
      {
        id: 12,
        link: "/home-v2",
        linkText: "Home Two"
      },
      {
        id: 13,
        link: "/home-v3",
        linkText: "Home Three"
      }
    ]
  },
  {
    id: 2,
    linkText: "About",
    link: "/"
  },
  {
    id: 3,
    linkText: "Services",
    child: true,
    submenu: [
      {
        id: 31,
        link: "/services",
        linkText: "Service"
      },
      {
        id: 32,
        link: "/service-details",
        linkText: "Service Details"
      }
    ]
  },
  {
    id: 4,
    linkText: "Pages",
    child: true,
    submenu: [
      {
        id: 41,
        link: "/why-us",
        linkText: "Why Choose Us"
      },
      {
        id: 42,
        linkText: "Team",
        child: true,
        submenu: [
          {
            id: 421,
            link: "/team",
            linkText: "Team"
          },
          {
            id: 422,
            link: "/team-details",
            linkText: "Team Details"
          }
        ]
      },
      {
        id: 43,
        linkText: "Portfolio",
        child: true,
        submenu: [
          {
            id: 431,
            link: "/portfolio-grid",
            linkText: "Portfolio Grid"
          },
          {
            id: 432,
            link: "/portfolio-slider",
            linkText: "Portfolio Slider"
          },
          {
            id: 433,
            link: "/portfolio-masonary",
            linkText: "Portfolio Masonary"
          },
          {
            id: 434,
            link: "/portfolio-details",
            linkText: "Portfolio Details"
          }
        ]
      },
      {
        id: 44,
        linkText: "News",
        child: true,
        submenu: [
          {
            id: 441,
            link: "/blog-standard",
            linkText: "News Standard"
          },
          {
            id: 442,
            link: "/blog-grid",
            linkText: "News Grid"
          },
          {
            id: 443,
            link: "/blog-details",
            linkText: "News Details"
          }
        ]
      },
      {
        id: 45,
        link: "/faq",
        linkText: "FAQ's"
      }
    ]
  },
  {
    id: 5,
    linkText: "News",
    child: true,
    submenu: [
      {
        id: 51,
        link: "/blog-standard",
        linkText: "News Standard"
      },
      {
        id: 52,
        link: "/blog-grid",
        linkText: "News Grid"
      },
      {
        id: 53,
        link: "/blog-details",
        linkText: "News Details"
      }
    ]
  },
  {
    id: 6,
    linkText: "Contact",
    link: "/"
  }
];

class Menu extends Component {
  getNextSibling = function(elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;
    // If there's no selector, return the first sibling
    if (!selector) return sibling;
    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling;
    }
  };
  triggerChild = e => {
    let subMenu = "";
    subMenu =
      this.getNextSibling(e.target, ".submenu") !== undefined
        ? this.getNextSibling(e.target, ".submenu")
        : null;
    if (subMenu !== null && subMenu !== undefined && subMenu !== "") {
      subMenu.classList = subMenu.classList.contains("d-block")
        ? "submenu"
        : "submenu d-block";
    }
  };
  render() {
    return (
      <ul>
        {navigationmenu.length > 0
          ? navigationmenu.map((item, i) => (
              <li
                key={i}
                className={`${item.child ? "menu-item-has-children" : ""} `}
                onClick={this.triggerChild}
              >
                {item.child ? (
                  <Link onClick={e => e.preventDefault()} to="/">
                    {" "}
                    {item.linkText}{" "}
                  </Link>
                ) : (
                  <Link to={item.link}> {item.linkText} </Link>
                )}
                {/* {item.child ? (
                  <ul className="submenu" role="menu">
                    {item.submenu.map((sub_item, i) => (
                      <li
                        key={i}
                        className={`${
                          sub_item.child ? "menu-item-has-children" : ""
                        } `}
                      >
                        {sub_item.child ? (
                          <Link onClick={e => e.preventDefault()} to="/">
                            {" "}
                            {sub_item.linkText}{" "}
                          </Link>
                        ) : (
                          <Link to={sub_item.link}> {sub_item.linkText} </Link>
                        )}
                        {sub_item.submenu ? (
                          <ul className="submenu">
                            {sub_item.submenu.map((third_item, i) => (
                              <li key={i}>
                                <Link to={third_item.link}>
                                  {third_item.linkText}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null} */}
              </li>
            ))
          : null}
      </ul>
    );
  }
}

export default Menu;
