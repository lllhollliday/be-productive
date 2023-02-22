import React from "react";

const ToDo = ({ text, todo, toDos, setToDos }) => {
  const deleteToDo = () => {
    setToDos(toDos.filter((el) => el.id !== todo.id));
    // Filter the current toDos, and show all those that do not match the Id if the selected toDo, when pressing the delete button.
  };

  const completedToDo = () => {
    // Map through the toDos, and if the id matches the selected todo, return it with the completed changed to false.
    // We can then change the css with a ternary operator in the toDoItem list item, to activate when the state has been changed.

    setToDos(
      toDos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="toDo">
      <li className={`toDoItem ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="listButtons">
        <button onClick={completedToDo} className="completeButton">
          Completed
        </button>
        <button onClick={deleteToDo} className="deleteButton">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDo;
