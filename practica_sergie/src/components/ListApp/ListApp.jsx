import { Item } from "./Item";
import { AddTask } from "./AddTask";
import { useState } from "react";

export const ListApp = () => {
  const myList = [
    { name: "Item one", seen: true },
    { name: "Item two", seen: true },
    { name: "Item three", seen: true },
    { name: "Item four", seen: true },
    { name: "Item five", seen: false },
    { name: "Item six", seen: false },
  ];
  const [array, setArray] = useState(myList);

  const onAddTask = (newTaskName) => {
    const newTaskNameTrim = newTaskName.trim();
    if (newTaskNameTrim) {
      const taskData = { name: newTaskNameTrim, seen: false };
      setArray([...array, taskData]);
    }
  };

  return (
    <>
      <h1>Task List 📋</h1>
      <ol>
        <AddTask handleAddTask={onAddTask} />
        {array.map((item, index) => (
          <Item key={item.name + index} name={item.name} seen={item.seen} />
        ))}
      </ol>
    </>
  );
};
