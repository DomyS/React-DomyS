import React from "react";
import "./Tab.css";

const Tab = props => (
  <li className="tab">
    <button
      className={`${props.isActive ? "active" : ""}`}
      onClick={event => {
        event.preventDefault();
        props.onClick(props.tabIdx);
      }}
    >
      {props.title}
    </button>
  </li>
);

export default Tab;
