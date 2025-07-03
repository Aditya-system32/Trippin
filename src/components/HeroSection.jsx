const HeroSection = () => {
  return (
    <div className="body-container">
      <div className="body-inner-container">
        <div className="body-header-container">
          <h1 className="heading-1">Welcome to</h1>
          <h1 className="heading-2">Lombok</h1>
          <h1 className="heading-3">Adventure and Tranquility</h1>
        </div>
        <div className="form-container">
          <form className="form-inner-container">
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>icon</p>
            </div>
            <label>City Or Hotel Name</label>
            <input placeholder="Hotel Name" />
            <div>
              <p>Check - In</p>
              <input placeholder="sun" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
