import React from "react";
import { Link, Router } from "react-router-dom";

function Header() {
  return (
    
    <div className="header">
      <ul>
        ⭐
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/activities">Games and Activites</Link>
        </li>
        <li>
          <Link to="/traditions">Christmas Traditions</Link>
        </li>
        <li>
          <Link to="/giftlist">Gift List</Link>
        </li>
        <li>
          <Link to="/countdown">Countdown to Christmas</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        ⭐
      </ul>
    </div>
  );
}

export default Header;
