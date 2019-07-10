import React from "react";
import "./style.css";

const FriendCard = props => (
  <div
    className="card img-container"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img src={props.image} alt={props.name} />
    </div>
  </div>
);


export default FriendCard;
