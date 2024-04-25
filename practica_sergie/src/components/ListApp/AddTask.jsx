import { useState } from "react";

export const AddTask = ({ handleAddTask: onAddTask }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onAddTask(inputValue);
    setInputValue("");
  };
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          className="add-task_input"
          type="text"
          placeholder="Enter new task"
          value={inputValue}
          onChange={onInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
