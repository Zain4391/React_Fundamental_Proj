import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);

  const togglehandle = () => {
    setShow(!show);
  };

  return { show, togglehandle };
};

export default useToggle;
