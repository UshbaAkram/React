import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/count/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
