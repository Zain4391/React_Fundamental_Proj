import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)} className="btn">
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const somefunc = () => {
      //Random Bullshit Go!!!
    };

    window.addEventListener("scroll", somefunc);
  }, []);

  /* return () => window.removeEventListener('scroll',someFunc); => no more increasing event listeners! */
  return <h2>Hello There</h2>;
};

export default CleanupFunction;
