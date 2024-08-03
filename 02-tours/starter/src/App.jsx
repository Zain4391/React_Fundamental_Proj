import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok === false) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button
            className="btn"
            onClick={fetchTours}
            style={{ marginTop: "2rem" }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />;
};
export default App;
