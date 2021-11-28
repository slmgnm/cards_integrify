import React from "react";
import Card from "./Card";

const CardsList = ({ cards }) => {
  return (
    <div className='front'>
      {cards.map((card) => {
        return <Card card={card} key={card.id}  />;
      })}
    </div>
  );
};

export default CardsList;
