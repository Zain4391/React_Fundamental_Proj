import { useState } from "react";

const ToggleChallenge = () => {
  const [isAlert, setIsAlert] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setIsAlert(!isAlert)}>
        Toggle
      </button>
      {isAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello World</div>;
};

export default ToggleChallenge;
