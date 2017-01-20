import React, { Component } from 'react';
import './style.css';

class Card extends Component {
  render() {
    var classes = ["Card"];
    if (this.props.tapped) classes.push("tapped")
    const imgSrc = this.props.faceDown ? "card-back.png" : this.props.imageUrl;

    return (
      <div className={classes.join(" ")}>
        <div className="CardBounds">
          <img src={imgSrc} alt="card" />
        </div>
      </div>
    );
  }
}

export default Card;
