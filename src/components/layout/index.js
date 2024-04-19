import React, { Component, Fragment } from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
            <main>
                <Outlet />
            </main>
      </Fragment>
    );
  }
}

export default Layout;
