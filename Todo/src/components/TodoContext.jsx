import React, { createContext, useEffect, useState } from "react";
export const TodoContext = createContext();
export const TodoContextProvider = ({ children }) => {
  const [todos, setTodo] = useState([]);

  function addTodo(todo) {
    setTodo([
      ...todos,
      {
        todo: todo,
        id: Date.now(),
      },
    ]);
  }
  const removeTodo = (id) => {
    setTodo(todos.filter((pre)=>pre.id!==id))
  };
  const updateTodo = (id, updatodo) => {
    setTodo(todos.map((todo)=>todo.id===id? {...updatodo,...todo} : todo))
  };
  useEffect(()=>{
    const dos=JSON.parse(localStorage.getItem('todos'))
    if(dos && dos.length>0 )
    setTodo(dos)
  },[])
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
   
  },[todos])

  const toggleComplete = (id) => {
    //console.log(id);
    setTodo((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }
  
  return (
    <TodoContext.Provider value={{ todos, updateTodo, removeTodo, addTodo , toggleComplete}}>
      {children}
    </TodoContext.Provider>
  );
};
