import useToggle from "./useToggle";

const ToggleExample = () => {
  const { show, togglehandle } = useToggle(true);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={togglehandle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
