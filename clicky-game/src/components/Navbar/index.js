import React from "react";
import "./style.css";

const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a href="/">{props.title}</a>
        </li>
        <li>
          {props.status}
        </li>
        <li>
          Current Score: {props.score}
        </li>
        <li>
          Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
