import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h2>FootBalPlayers</h2>
      <div className="ankor">
        <a href="/homr">Home</a>
        <a href="/about">About</a>
        <a href="Details">Details</a>
      </div>
    </nav>
  );
};

export default Header;
