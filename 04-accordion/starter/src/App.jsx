import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

const App = () => {
  const [data, setdata] = useState(questions);
  console.log(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
