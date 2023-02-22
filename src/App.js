import { useState, Routes, Route } from "react";
import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

import ToDoRoute from "./routes/ToDoRoute";
import HabitsRoute from "./routes/HabitsRoute";
import HomeRoute from "./routes/HomeRoute";
import NotFound from "./routes/Notfound";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [toDos, setToDos] = useState([]);

  return (
    /*     <div className="App">
      <Routes>
        < Route path="/" element={<HomeRoute/>}>
      <Route path="todoroute" element={<ToDoRoute/>}/>
      <Route Route path="habitsroute" element={<HabitsRoute/>}/>
      </Route>
      <Route path='*' element={<NotFound/>} /> 
      </Routes>
    

 */

    // First create the structure in the app.js
    <div className="App">
      <div className="container">
        <Header />
        <div className="formContainer">
          <Form
            input={input}
            setInput={setInput}
            toDos={toDos}
            setToDos={setToDos}
          />
        </div>
        <div className="toDoListContainer">
          <ToDoList toDos={toDos} setToDos={setToDos} />
        </div>
      </div>
    </div>
  );
}

export default App;
