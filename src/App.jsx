import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Dashboard from './componentTask1/Dashboard'
import Counter from './componentTask2/Counter'
import SearchBar from './componentTask3/SearchBar'
import SecretMessage from './componentTask4/SecretMessage'
import TodoList  from './componentTask5/TodoList'
import Form from './componentTask6/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard></Dashboard>
      <Counter></Counter>
      <SearchBar></SearchBar>
      <SecretMessage></SecretMessage>
      <TodoList></TodoList>
      <Form></Form>
    </>
  )
}

export default App
