import React from "react";
import "./style.css";

const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a href="/">{props.title}</a>
        </li>
      </ul>
      <span className="navbar-text">
        {props.currentScore} | {props.topScore}
      </span>
    </nav>
  );
}

export default Nav;
