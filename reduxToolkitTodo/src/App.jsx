import { useState } from 'react'
import './App.css'
import TodoItems from './components/TodoItems'
import AddTodo from './components/AddTodo.jsx'
import { Provider } from 'react-redux'
import {store} from './app/store.js'


function App() {

  return (
    // <Provider store={store}>
     <>   
      <AddTodo/>
    <TodoItems/>
    </>

    // </Provider>
  )
}

export default App
