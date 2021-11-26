import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CardsList from "./CardsList";
import "./App.css";
function App() {
  const [cards, setcards] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const users = 
        res.data.map((user, index) => {
          
          return {
            id: `${index}-${Date.now()}`,
            user: user.name,
            username: user.username,
          };
        }
      );
      setcards(users);
      console.log(users);
    });
  }, []);

  return (
    <>
      <div className='container'>
        <CardsList cards={cards} />
      </div>
    </>
  );
}

export default App;
