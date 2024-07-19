import { useContext,useState } from "react";
import { TodoContext } from "./TodoContext";

 const Displaytodo = ({todo}) => {
  const { todos, removeTodo,toggleComplete } = useContext(TodoContext);
  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  // const toggleCompleted = () => {
  //   console.log(todo.id);
  //   toggleComplete(todo.id)
  // }
  return (
    <div>
      <h2>display Todo</h2>
      <ul>
          {todos.map((todo) => (
          <li key={todo.id}  className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}>
              <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={()=>toggleComplete(todo.id)}
          />
            {todo.todo}
          <button onClick={()=>removeTodo(todo.id)}>remove</button>
          
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Displaytodo;