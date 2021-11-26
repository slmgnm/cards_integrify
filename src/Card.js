import React, { useState, useEffect, useRef } from "react";

const Card = ({ card }) => {
  const [height, setHeight] = useState("initial");
  const frontEl = useRef();

  const maxHieght = () => {
    const frontHieght = frontEl.current.getBoundingClientRect().height;

    setHeight(() => Math.max(frontHieght, 100));
  };
  useEffect(maxHieght, [card.user, card.username]);
  useEffect(() => {
    window.addEventListener("resize", maxHieght);
    return () => window.removeEventListener("resize", maxHieght);
  }, []);

  return (
    <div className='card' ref={frontEl}>
      {card.user}
    </div>
  );
};

export default Card;
