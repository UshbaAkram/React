import { useContext ,useState} from "react";
import { TodoContext } from "./TodoContext";

const AddTodo = () => {
    const [text, setText] = useState('')
    const {addTodo}=useContext(TodoContext)
    const hndel=()=>{
        addTodo(text)
        setText('')
    }
    return ( 
        <> <h2>Add Todo</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Todo text"
        />
        <button onClick={hndel}>Add</button>
   
        </>
     );
}
 
export default AddTodo;