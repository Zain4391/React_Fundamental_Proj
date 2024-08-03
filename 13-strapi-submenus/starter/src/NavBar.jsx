import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
const NavBar = () => {
  const { openSideBar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav>
      <div className="nav-center" onMouseOver={handleSubmenu}>
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSideBar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
