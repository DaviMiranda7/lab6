import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import logo from "./Logo.png"; // Importe a logo

function App() {
  return (
    <Router>
      <header>
        <nav
          className="navbar"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Galaxium Logo"
            className="logo"
            style={{ width: "50px", height: "auto", marginRight: "20px" }} // Ajuste o tamanho da logo e adicione margem
          />
          <ul
            className="nav-links"
            style={{ display: "flex", listStyle: "none" }}
          >
            <li style={{ marginRight: "20px" }}>
              <Link
                to="/"
                style={{ color: "black", textDecoration: "none" }}
                activeStyle={{ color: "red" }}
              >
                Home
              </Link>
            </li>
            <li style={{ marginRight: "20px" }}>
              <Link
                to="/sobre"
                style={{ color: "black", textDecoration: "none" }}
                activeStyle={{ color: "red" }}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                style={{ color: "black", textDecoration: "none" }}
                activeStyle={{ color: "red" }}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
