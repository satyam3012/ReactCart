import React, { useState } from 'react';
import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from './MyComponents/AddTodo';

function App() {
  const addTodo = (title, desc) => {
    let sno;
    if(todos.length === 0) {
      sno = 1;
    }
    else{
      sno = todos.length + 1;
    }
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  const onDelete = (todo) => {
    console.log("you clicked onDelete", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : "go to the market",
      desc : "you need to go to the market to get this job done"
    },
    {
      sno : 2,
      title : "go to the mall",
      desc : "you need to go to the mall to get this job done"
    },
    {
      sno : 3,
      title : "go to the office",
      desc : "you need to go to the office to get this job done"
    }
  ]);
  return (
    <>
      <Header title="My Todos List"/>
      <AddTodo addTodo = {addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
