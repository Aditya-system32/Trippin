import { Hotel, MapPin, Calendar, Moon } from "lucide-react";

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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Hotel style={{ marginTop: "4px" }} />
              <h2 style={{ marginLeft: "20px", fontWeight: "500" }}>
                Discover Hotels
              </h2>
            </div>
            <label style={{ marginTop: "25px", fontSize: "20px" }}>
              City Or Hotel Name
            </label>
            <div style={{ display: "flex" }}>
              <MapPin
                style={{
                  position: "absolute",
                  marginTop: "14px",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
              <input
                placeholder="Hotel Name"
                style={{
                  height: "20px",
                  marginTop: "5px",
                  padding: "10px",
                  paddingLeft: "40px",
                  border: "none",
                  backgroundColor: "#F5F6FD",
                  borderRadius: "8px",
                  outline: "none",
                  width: "100%",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "25px",
              }}
            >
              <div style={{ width: "48%", flexDirection: "column" }}>
                <label style={{ marginTop: "25px", fontSize: "20px" }}>
                  Check - In
                </label>
                <input
                  placeholder="sun"
                  type="date"
                  style={{
                    height: "40px",
                    marginTop: "5px",
                    padding: "10px",
                    paddingLeft: "10px",
                    border: "none",
                    backgroundColor: "#F5F6FD",
                    borderRadius: "8px",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div
                style={{
                  width: "48%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label style={{ fontSize: "20px" }}>Check - Out</label>
                <Moon
                  style={{
                    position: "absolute",
                    marginTop: "45px",
                    marginLeft: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
                <input
                  placeholder="night"
                  style={{
                    height: "40px",
                    marginTop: "5px",
                    padding: "10px",
                    paddingLeft: "40px",
                    border: "none",
                    backgroundColor: "#F5F6FD",
                    borderRadius: "8px",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>
            <label style={{ marginTop: "25px", fontSize: "20px" }}>
              Guests And Rooms
            </label>
            <div style={{ display: "flex" }}>
              <Calendar
                style={{
                  position: "absolute",
                  marginTop: "14px",
                  marginLeft: "10px",
                  width: "20px",
                  height: "20px",
                }}
              />
              <input
                placeholder="3 Adult, 1 Child And 1 Room"
                style={{
                  height: "20px",
                  marginTop: "5px",
                  padding: "10px",
                  paddingLeft: "40px",
                  border: "none",
                  backgroundColor: "#F5F6FD",
                  borderRadius: "8px",
                  outline: "none",
                  width: "100%",
                }}
              />
            </div>
            <button
              style={{
                borderRadius: "30px",
                cursor: "pointer",
                padding: "18px",
                backgroundColor: "black",
                color: "white",
                marginTop: "40px",
              }}
            >
              {" "}
              Search Hotel
            </button>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "55%",
              marginLeft: "auto",
              marginRight: "auto",
              flexWrap:"wrap",
              marginTop:"30px",
              gap:10
            }}
            className="form-below-button"
          >
            <button>LANDSCAPE</button>
            <button>EXCURISON</button>
            <button>JOURNEY</button>
            <button>EXCITING</button>
            <button>TRAVEL</button>
            <button>BEACH</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
