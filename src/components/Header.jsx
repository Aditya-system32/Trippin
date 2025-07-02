const Header = () => {
  return (
    <div className="header-container">
      <h3>TRIPPIN</h3>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Destination</li>
        <li>Reviews</li>
        <li>Blog</li>
      </ul>
      <div className="button-container">
        <button className="login-button">Login</button>
        <span>|</span>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default Header;
