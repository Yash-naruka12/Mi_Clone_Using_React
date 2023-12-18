import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import SearchIcon from "../svgs/SearchIcon";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/dsd">
          <img
            id="logoImage"
            src={
              "https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
            }
            alt="not found"
          />
        </Link>
      </div>
      <Link className="navLinks" to="/miphones">
        Mi Phones
      </Link>
      <Link className="navLinks" to="/redmiphones">
        Redmi Phones
      </Link>
      <Link className="navLinks" to="/tv">
        TV
      </Link>
      <Link className="navLinks" to="/laptops">
        Laptops
      </Link>
      <Link className="navLinks" to="/lifestyle">
        Fitness & Lifestyle
      </Link>
      <Link className="navLinks" to="/home">
        Home
      </Link>
      <Link className="navLinks" to="/radio">
        Radio
      </Link>
      <Link className="navLinks" to="/accessories">
        Accessories
      </Link>

      <div className="searchbox">
        <input type="text" placeholder="Search Products" />
        {<SearchIcon />}
      </div>
    </div>
  );
}

export default Navbar;
