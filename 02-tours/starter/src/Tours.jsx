import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section style={{ padding: "2rem", margin: "5rem" }}>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          const { id, image, info, name, price } = tour;
          return (
            <Tour
              key={id}
              id={id}
              image={image}
              info={info}
              name={name}
              price={price}
              removeTour={removeTour}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
