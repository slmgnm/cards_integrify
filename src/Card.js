import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FullCard from "./FullCard";
const Card = ({ card, users }) => {
  const [height, setHeight] = useState("initial");
  const frontEl = useRef();

  function getFirstCharecter(str) {
    let firstChar = [];
    firstChar.push(str.charAt());
    var str = JSON.stringify(firstChar);

    return firstChar;
  }
  const firstChar = getFirstCharecter(card.user);

  const maxHieght = () => {
    const frontHieght = frontEl.current.getBoundingClientRect().height;

    setHeight(() => Math.max(frontHieght, 100));
  };
  useEffect(maxHieght, [
    card.user,
    card.username,
    card.email,
    card.website,
    card.address,
    card.company,
    card.phone,
  ]);
  useEffect(() => {
    window.addEventListener("resize", maxHieght);
    return () => window.removeEventListener("resize", maxHieght);
  }, []);

  return (
    <div className='card-grid' ref={frontEl}>
      <div className='card'>
        <div className='char'>{firstChar}</div>{" "}
      </div>
      <div className='card1'>{card.user}</div>
      <div className='card2'> @{card.username}</div>
      <div className='card3'> http://{card.website}</div>
      <div className='card'>
        <Link className='btn' to={`/cards/${card.user}`}>
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
