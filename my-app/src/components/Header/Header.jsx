import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useClickOutside } from "../useClickOutside";
import { IoMenu } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  const [isOpen, setOpen] = useState();
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <header className="header">
      <span className="logo">A</span>
      <h1 className="title">АРІ КО</h1>
      <button className="menu-button" onClick={() => setOpen(!isOpen)}>
        <IoMenu color="#eab70e" size="4em" />
      </button>
      <nav className={`menu ${isOpen ? "active" : ""}`} ref={menuRef}>
        <NavLink
          className="navlink"
          to="/"
          end
          style={({ isActive }) => ({
            color: isActive ? "#eab70e" : " ",
          })}
        >
          ГОЛОВНА
        </NavLink>
        <NavLink
          className="navlink"
          to="/products"
          style={({ isActive }) => ({
            color: isActive ? "#eab70e" : " ",
          })}
        >
          ТОВАРИ
        </NavLink>
        <NavLink
          className="navlink"
          to="/contacts"
          style={({ isActive }) => ({
            color: isActive ? "#eab70e" : " ",
          })}
        >
          КОНТАКТИ
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
