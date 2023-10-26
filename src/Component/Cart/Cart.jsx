import "./Cart.css";

const Cart = ({ carts }) => {
  const { name, id, star, costing_price } = carts || {};
  let totalPrice = 0;
  let playerSter = 0;
  for (const player of carts) {
    totalPrice = totalPrice + player.costing_price;
    playerSter = playerSter + player.star;
  }

  return (
    <div>
      <h1 className="selected">Selected person</h1>
      <h3>
        Name:{" "}
        {carts.map((cart) => (
          <li>{cart.name}</li>
        ))}
      </h3>
      <p>Price: {totalPrice}</p>
      <p>Star: {playerSter}</p>
    </div>
  );
};

export default Cart;
