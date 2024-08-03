import React from "react";
import { useAppContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSide, openModal } = useAppContext();

  return (
    <main>
      <button onClick={openSide} className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show Modal
      </button>
    </main>
  );
};

export default Home;
