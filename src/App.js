import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import myImage from "./images/edgar_romero1.jpg";
import { Navbar, Footer } from "./components";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <body>
      <Router>
        <div className="App">
          <Navbar>
            <Routes>
              <Route path="/about" element={<About />} />
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