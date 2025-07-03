const Header = () => {
  return (
    <div className="header-container">
      <h3>TRIPPIN</h3>
      <div className="nav-bar-container">
        <button>Home</button>
        <button>About Us</button>
        <button>Destination</button>
        <button>Reviews</button>
        <button>Blog</button>
      </div>
      <div className="button-container">
        <button className="login-button">Login</button>
        <span>|</span>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default Header;
