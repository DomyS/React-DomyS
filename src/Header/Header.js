import React, { Component } from "react";
import logo from "./logo1.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <img className="logo" src={logo} alt="logo" />
            <div className="texts">
              <h1 className="text">Domante Stirbyte</h1>
              <h2 className="text1">Frontend Developer | Oslo</h2>
              <p className="paragraph">
                Hey there friend! I am self-taught passionate frontend
                developer. I have around 2 years experience as a freelancer.
                Also, I did 6 months course/internship in a startup, where I
                mainly focused on React. Constantly searching for interesting
                projects and cool ideas to work with. Check out some of my
                projects. This portfolio is created using React.{" "}
                <i className="fa fa-heart"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
