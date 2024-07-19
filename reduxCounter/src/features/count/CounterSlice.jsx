import {createSlice} from '@reduxjs/toolkit'

// const initValues={
//     value:0,
// }
function inc(state){
    state.value+=1
}
const CounterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        //  increment: (state)=> {state.value +=1},
        increment: inc,
         decrement: (state)=> {state.value-=1}  ,
         incrBy:(state,action)=>{
            console.log(action.payload);
            state.value+=Number(action.payload)
         }       
   }
});
export const{increment, decrement, incrBy}= CounterSlice.actions;
export default CounterSlice.reducer;
