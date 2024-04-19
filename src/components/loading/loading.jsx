import React, { Component } from "react";
import { Fragment } from "react";

import "./loading.scss";


class Loading extends Component {
  render() {
    return (
      <Fragment>
        <div className="loading">
          <div className="loading-container">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Loading;
