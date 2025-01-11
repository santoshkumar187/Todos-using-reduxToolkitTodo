import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <> <center>
      <h1 className="text-white" >Create a todo-list here</h1>
      </center>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
