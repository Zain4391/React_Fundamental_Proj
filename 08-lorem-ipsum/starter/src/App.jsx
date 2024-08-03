import { useState } from "react";
import { nanoid } from "nanoid";
import text from "./data";
const App = () => {
  const [count, setCount] = useState(3);
  const [textState, setTextState] = useState([]);
  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let n = parseInt(count);
    const newText = text.slice(0, n);
    setTextState(newText);
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount" className="form-label">
          Paragraphs:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {textState.map((para) => {
          const id = nanoid();
          return <p key={id}>{para}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
