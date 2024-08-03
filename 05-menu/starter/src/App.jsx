import React, { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const filter_category = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(filter_category);

  const handleCategory = (category) => {
    if (category === "all") {
      setItems(data);
      return;
    }

    const newMenu = data.filter((item) => item.category === category);
    setItems(newMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} handleCategory={handleCategory} />
        <Menu items={items} />
      </section>
    </main>
  );
};
export default App;
