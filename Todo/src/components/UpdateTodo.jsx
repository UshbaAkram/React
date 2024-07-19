// const updateTodo = () => {
//   const { updateTodo } = useContext(TodoContext);

//     const [isTodoEditable, setIsTodoEditable] = useState(false)
//   function editTodo(){
//     updateTodo()
//   }

//     return ( <div className="updateTodo">
//         <button onClick={()=>{if(isTodoEditable)
//             editTodo()
//             else setIsTodoEditable((prv)=>!prv)
//           }}>
//             {isTodoEditable? "📁" : "✏"}
//           </button>
          
//     </div> );
// }
 
// export default updateTodo;
import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const UpdateTodo = ({ id, currentText }) => {
  const [text, setText] = useState(currentText);
  const [isEditing, setIsEditing] = useState(false);
  const { updateTodo } = useContext(TodoContext);

  const handleUpdate = () => {
    updateTodo(id, { text });
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!isEditing}
        placeholder="Updated todo text"
      />
      
        <button onClick={()=>{if(isEditing) handleUpdate() 
            else setIsEditing(true)}}>
         {isEditing ? "📁" : "✏"}

            </button>
      
    </div>
  );
};

export default UpdateTodo;
