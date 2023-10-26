import "./PDetails.css";

const PDetails = ({ player }) => {
  const { name, costing_price, star, email, img } = player || {};
  return (
    <div className="player">
      <img src={img} alt="" />
      <div className="player-info">
        <h6>Player Name: {name}</h6>
        <p>Price of Costing: ${costing_price}</p>
        <p>Star: {star}</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default PDetails;
