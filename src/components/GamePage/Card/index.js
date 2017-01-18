import React, { Component } from 'react';
import './style.css';
import { connect } from "react-redux";

import { fetchUser } from "../../../actions/deckActions";

class Card extends Component {
  render() {
    var classes = ["card"];
    if (this.props.tapped) classes.push("tapped")
    const imgSrc = this.props.faceDown ? "card-back.png" : this.props.imageUrl;

    return (
      <div className={classes.join(" ")}>
        <img src={imgSrc} />
      </div>
    );
  }
}

export default Card;
