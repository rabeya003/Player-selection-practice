import "./PDetails.css";

const PDetails = (props) => {
  const { name, costing_price, star, img } = props.player || {};
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="player">
      <img src={img} alt="" />
      <div className="player-info">
        <h6>Player Name: {name}</h6>
        <p>Price of Costing: ${costing_price}</p>
        <p>Star: {star}</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.player)}
        className="btn-cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PDetails;
