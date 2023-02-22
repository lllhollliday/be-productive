import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos, setToDos }) => {
  return (
    <div className="toDoContainer">
      <ul className="toDoList">
        {toDos.map((todo) => ( // Here I want to map through the toDos state which have been passed down as props, and update the values in the ToDo.js file. 

          <ToDo // Here we pass the states, and the mapped todo items, in order to create functionality with them
          
            toDos={toDos} 
            setToDos={setToDos} 
            todo={todo}
            text={todo.text}
            id={todo.id}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
