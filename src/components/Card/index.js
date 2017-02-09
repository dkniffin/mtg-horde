import React from 'react';
import './style.scss';
import cardBack from './card-back.png'
import tapIcon from './tap-icon.png'

const Card = ({tapped, faceDown, imageUrl, power, toughness, onClick, onTap}) => {
  var classes = ["Card"];
  if (tapped) classes.push("tapped")
  const imgSrc = faceDown ? cardBack : imageUrl;

  return (
    <div className={classes.join(" ")}>
      <div className="CardBounds">
        <img src={imgSrc} alt="card" onClick={onClick} />
        {power && toughness &&
          <span className="PTindicator">{power}/{toughness}</span>
        }
      </div>
      {onTap &&
        <button className="TapCard" onClick={onTap}>
          <img src={tapIcon} role="presentation" />
        </button>
      }
    </div>
  );
}

export default Card;
