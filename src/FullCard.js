import React from "react";
import Button from "./Button";
import { useParams } from "react-router";

export default function FullCard({ cards }) {
  const { user } = useParams();
  return (
    <div className='full-card'>
      {cards
        .filter((card) => card.user === user)
        .map((card, index) => (
          <div key={index}>
            
            <h3>{`-Name: ${card.user}`}</h3>
            <h3>{`-Userame: ${card.username}`}</h3>
            <h3>{`-Email: ${card.email}`}</h3>
            <h3>{`-Phone: ${card.phone}`}</h3>
            <h3>{`-Company: ${card.company.name}`}</h3>

            <h3> -Address:</h3>
            <ul>
              <li>
                <h3> {card.address.street}</h3>
              </li>
              <li>
                <h3> {card.address.suite}</h3>
              </li>
              <li>
                <h3> {card.address.city}</h3>
              </li>
              <li>
                <h3> {card.address.zipcode}</h3>
              </li>
            </ul>
            <Button>button</Button>
          </div>
        ))}
    </div>
  );
}
