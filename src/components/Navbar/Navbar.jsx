import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <img
          class="logo"
          src="https://cdn.pixabay.com/photo/2017/08/24/07/40/annotation-2675672_960_720.png"
          alt="logo"
        />

        <nav class="navbar">
          <ul class="nav-area">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/contect">Contact</Link>
            </li> */}
            <li>
              <Link class="btn-area" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
