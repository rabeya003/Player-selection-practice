import { useState } from "react";
import "./Player.css";
import { useEffect } from "react";
import PDetails from "../PDetails/PDetails";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";

const Player = () => {
  const [players, setPlayer] = useState([]);
  const [carts, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = players.find((player) => player.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [players]);
  const handleAddToCart = (player) => {
    let newCart = [];
    const exits = carts.find((cart) => cart.id === player.id);
    if (!exits) {
      newCart = [...carts, player];
    } else {
      alert("Already Exits");
      newCart = [];
    }
    setCart(newCart);
    addToDb(player.id);
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
        <Cart carts={carts}></Cart>
      </div>
    </div>
  );
};

export default Player;
