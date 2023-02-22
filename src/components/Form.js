import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, toDos, setToDos }) => {
  const onInputChange = (e) => {
    setInput(e.target.value); // Update the state here through the input of the form.
  };

  const onFormSubmit = (e) => {
    // I want to stop react resetting on click, so prevent default
    e.preventDefault();
    // Instead of the default action, return here whatever is already held in the toDos state, and then the input text, with it's own personal id created with this plugin. We set the default state of completion to false.
    setToDos([...toDos, { text: input, id: uuidv4(), completed: false }]);
    setInput(""); // resets state
  };

  // 2. created the form to input the tasks

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter task"
        value={input} // update ui here with state
        onChange={onInputChange}
      />
      <button type="submit" className="button-add">
        Add
      </button>
    </form>
  );
};

export default Form;
