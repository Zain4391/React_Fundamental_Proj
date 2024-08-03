import React, { createContext, useState } from "react";
import Navlinks from "./Navlinks";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "Bob" });

  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
