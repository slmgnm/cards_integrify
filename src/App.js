import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import CardsList from "./CardsList";
import FullCard from "./FullCard";
import "./App.css";
function App() {
  const [cards, setcards] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const users = res.data.map((user, index) => {
        return {
          id: `${index}-${Date.now()}`,
          user: user.name,
          username: user.username,
          website: user.website,
          phone: user.phone,
          company: user.company,
          email: user.email,
          address:user.address,
        };
      });
      setcards(users);
      console.log(users);
    });
  }, []);

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<CardsList cards={cards} />}></Route>
          <Route
            path='/cards/:user'
            element={<FullCard cards={cards} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
