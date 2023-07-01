import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import myImage from "./images/IMG_3328.jpg";
import { Navbar, Aboutme, Footer, Portfolio, Contact } from "./components";

const App = () => {
  return (
    <body>
      <Router>
      <div className="App">
        <Navbar>
          <Routes>
            <Route path="/about" element={<Aboutme />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
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
      </Router>
    </body>
  );
};

export default App;
