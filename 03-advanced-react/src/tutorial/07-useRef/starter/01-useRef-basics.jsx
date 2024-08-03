import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refCont = useRef(null); //default obj with current:null
  const isMounted = useRef(false); //aloows some functionality to run only on first render

  /*useEffect(() => {
    if (isMounted.current === false) {
      isMounted.current = true;
      return;
    }
    console.log(isMounted.current);
  }, [value]);

  useEffect(() => {
    refCont.current.focus();
  }); */

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refCont.current.value; //now current will have a value
    alert(name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" className="form-input" ref={refCont} />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
