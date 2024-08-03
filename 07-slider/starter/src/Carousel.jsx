import { shortList, list, longList } from "./data";
import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Carousel = () => {
  const [data, setData] = useState(longList);
  const [person, SetPerson] = useState(0);
  const prevSlide = () => {
    SetPerson((old) => {
      const result = (old - 1 + data.length) % data.length;
      return result;
    });
  };
  const nextSlide = () => {
    SetPerson((old) => {
      const result = (old + 1) % data.length;
      return result;
    });
  };

  useEffect(() => {
    let id = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [person]);
  return (
    <section className="slider-container">
      {data.map((user, index) => {
        const { id, image, name, quote, title } = user;
        return (
          <article
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (index - person)}%)`,
              opacity: person === index ? 1 : 0,
              visibility: person === index ? "visible" : "hidden",
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
