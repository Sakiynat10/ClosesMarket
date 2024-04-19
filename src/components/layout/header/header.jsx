import React, { Component, Fragment } from "react";

import "./header.scss";
import { NavLink, Link } from "react-router-dom";
import { Button } from "bootstrap";

class Header extends Component {
  state = {
    isVisible: false,
  };
  render() {
    const { isVisible } = this.state;
    return (
      <Fragment>
        <header>
          <div className="nav container">
            <div className="nav-left">
              <Link to="/" className="logo">
                <img src="/logo.png" alt="logo" />
              </Link>
              <ul className="nav-menu">
                <li>
                  <NavLink to="/">All Products</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contacts</NavLink>
                </li>
                <li className="nav-medias">
                  <Link href="a">
                    <img src="/instagram.svg" alt="" />
                  </Link>
                  <Link href="a">
                    <img src="/facebook.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <Link to="/heart">
                <img src="/heart.svg" alt="" />
              </Link>
              <Link href="a">
                <img src="/korzina.svg" alt="" />
              </Link>

              <img className="menu-img" src="/menu.svg" alt="" />
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
