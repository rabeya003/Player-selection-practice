import { useState } from "react";
import "./Player.css";
import { useEffect } from "react";
import PDetails from "../PDetails/PDetails";

const Player = () => {
  const [players, setPlayer] = useState([]);
  const [carts, setCart] = useState([]);
  const handleAddToCart = (player) => {
    console.log(player);
    let newCart = [];
    const exits = carts.find((cart) => cart.id === player.id);
    if (!exits) {
      // const player.quantity=1;
      newCart = [...carts, player];
    } else {
      alert("Already Exits");
    }
    setCart(newCart);
  };
  useEffect(() => {
    fetch("./player.json")
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);
  return (
    <div className="container">
      <div className="p-ditails">
        {players.map((player) => (
          <PDetails
            player={player}
            key={player.id}
            handleAddToCart={handleAddToCart}
          ></PDetails>
        ))}
      </div>
      <div className="cart">
        <h2>player Calculation</h2>
      </div>
    </div>
  );
};

export default Player;
