import React from "react";

const BtnContainer = ({ jobs, item, setItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            className={index === item ? "job-btn active-btn" : "job-btn"}
            onClick={() => setItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
