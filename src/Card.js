import React from "react";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  function getFirstCharecter(str) {
    let firstChar = [];
    firstChar.push(str.charAt());
    // var str = JSON.stringify(firstChar);

    return firstChar;
  }
  const firstChar = getFirstCharecter(card.user);

  return (
    <div className='card-grid'>
      <div className='card'>
        <div className='char'>{firstChar}</div>{" "}
      </div>
      <div className='card1'>{card.user}</div>
      <div className='card2'> @{card.username}</div>
      <div className='card3'> {`http://${card.website}`}</div>
      <div className='card'>
        <Link className='btn' to={`/cards/${card.user}`}>
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
