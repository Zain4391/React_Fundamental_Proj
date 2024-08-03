const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count++;
    console.log(count);
  };
  return (
    <>
      <h2>useState error example</h2>
      <p>{count}</p>
      <button onClick={handleClick} className="btn">
        Click me
      </button>
    </>
  );
};

export default ErrorExample;
