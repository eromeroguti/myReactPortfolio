import React from "react";
import myImage from "./images/IMG_3328.jpg";
import { Navbar, Aboutme, Footer, Portfolio, Contact } from "./components";

const App = () => {
  return (
    <body>
      <div className="App">
        <Navbar>
          <Aboutme />
        </Navbar>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            src={myImage}
            alt="Main Image"
            style={{ maxWidth: "50%", maxHeight: "50%" }}
          />
        </div>
      </div>
      <div className="container" style={{ background: "black" }}>
        <Footer />
      </div>
    </body>
  );
};

export default App;
