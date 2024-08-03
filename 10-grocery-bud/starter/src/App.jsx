import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Item from "./Item";

const setLocalStorage = (items) => {
  //provided by the browser, will be stored in the browser, 1st arg is key(must match!)
  localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const additems = (item_name) => {
    const newitem = {
      id: nanoid(),
      name: item_name,
      status: false,
    };

    if (!newitem.name) {
      toast.error("Please enter a task name");
      return;
    }

    //copy(or spread) the array and then add the new object inside it
    const newItems = [...items, newitem];
    setItems(newItems);
    setLocalStorage(newItems);

    //library(npm i react-toastify)
    toast.success("item added to the list");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.error("item removed from the list");
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, status: !item.status };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form additems={additems} />
      <Item items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
