import React from "react";
import logo from "./logo.svg";
import { social, links } from "./data";
import { useAppContext } from "./context";
import { FaTimes } from "react-icons/fa";
const SideBar = () => {
  const { isOpenSide, closeSide } = useAppContext();
  return (
    <aside className={isOpenSide ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="codding addict" className="logo" />
        <button className="close-btn" onClick={closeSide}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
