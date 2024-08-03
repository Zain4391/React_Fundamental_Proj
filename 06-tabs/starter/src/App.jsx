import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [item, setItem] = useState(0);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} item={item} setItem={setItem} />
      <JobInfo jobs={jobs} item={item} />
    </section>
  );
};
export default App;
