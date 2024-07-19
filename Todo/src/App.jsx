// import { useState } from 'react'
// import AddTodo from './components/AddTodo'
// import { Displaytodo } from './components/Dsplaytodo'

// function App() {
//   const [count, setCount] = useState(0)
 
//   return (
//   <>
//   <AddTodo/>
//   <Displaytodo />
  
  
//   </>
//   )
// }

// export default App
import React, { useContext, useState } from 'react';
import DisplayTodo from './components/Dsplaytodo';
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';
import { TodoContext } from './components/TodoContext';

const App = () => {
  const { todos } = useContext(TodoContext);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const handleEditClick = (id) => {
    setCurrentTodoId(id);
  };

  return (
    <div>
      <AddTodo />
      <DisplayTodo />
      <UpdateTodo />
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {currentTodoId === todo.id ? (
              <UpdateTodo
                id={todo.id}
                currentText={todo.text}
              />
            ) : (
              <span>{todo.todo}</span>
            )} */}
            {/* <button onClick={() => handleEditClick(todo.id)}>✏</button> */}
            {/* <button onClick={() => removeTodo(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
