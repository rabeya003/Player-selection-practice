import { useState } from "react";
import "./Player.css";
import { useEffect } from "react";
import PDetails from "../Header/PDetails/PDetails";
const Player = () => {
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);
  return (
    <div className="container">
      <div className="p-ditails">
        {players.map((player) => (
          <PDetails player={player} key={player.id}></PDetails>
        ))}
      </div>
      <div className="cart">
        <h2>player Calculation</h2>
      </div>
    </div>
  );
};

export default Player;
