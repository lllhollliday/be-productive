/* import React from "react";
import { useState } from "React";
import Form from "../components/Form";
import ToDoList from "../components/ToDoList";

export default function ToDoRoute() {
  const [input, setInput] = useState("");
  const [toDos, setToDos] = useState([]);

  return (
    <div className="formContainer">
      <Form
        input={input}
        setInput={setInput}
        toDos={toDos}
        setToDos={setToDos}
      />
      <div className="toDoListContainer">
        <ToDoList toDos={toDos} setToDos={setToDos} />
      </div>
    </div>
  );
}
 */