import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value:[1], 
    
  },
  reducers: {
    addTodo: (state, action) => {
    console.log("Action dispatched hee:", action.payload, state.value);

      // const todo = [
      //   action.payload
      // ]

      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
        state.value.filter(prv=>prv.id!==action.payload)
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
