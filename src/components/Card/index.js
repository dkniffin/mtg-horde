import React from 'react';
import './style.scss';

const Card = ({tapped, faceDown, imageUrl, power, toughness, onClick, onTap}) => {
  var classes = ["Card"];
  if (tapped) classes.push("tapped")
  const imgSrc = faceDown ? "card-back.png" : imageUrl;

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
          <img src="tap-icon.png" role="presentation" />
        </button>
      }
    </div>
  );
}

export default Card;
