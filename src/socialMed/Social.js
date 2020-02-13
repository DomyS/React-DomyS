import React, { Component } from "react";
import "./Social.css";

export default class Social extends Component {
  render() {
    return (
      <div className="socialWrapper">
        <h1>Contact Me Anytime</h1>
        <ul>
          <li>
            <div className="back"></div>
            <div className="icon">
              <a href="www.linkedin.com/in/domante-stirbyte-07789b92">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </li>
          <li>
            <div className="back"></div>
            <div className="icon">
              <a href="https://github.com/DomyS">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </li>
          <li>
            <div className="back"></div>
            <div className="icon">
              <a href="mailto:domante.stirbyte@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
