import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  // add NavLinks to allow the user to navigate to the 3 pages of the app
  return (
    <div className="header">
      <NavLink to="/"> </NavLink>
      <NavLink to="/by-region"> </NavLink>
      <NavLink to="/by-name"> </NavLink>

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          listStyle: "none",
          margin: "auto",
          gap: "12rem",
          width: "100vw",
        }}
      >
        <li>
          <a href="all-countries">All Countries</a>
        </li>
        <li>
          <a href="by-region">By Region</a>
        </li>
        <li>
          <a href="by-name">By Name</a>
        </li>
      </ul>
    </div>
  );
}
