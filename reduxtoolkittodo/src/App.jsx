import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/AddTodo'
import Todo from './component/Todo'

function App() {
  return (
    <>
     <h3> New TodoList </h3>
     <AddTodo/>
     <Todo/>
    </>
  )
}

export default App
