import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import {Outlet} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  return <div>
  <Header count={count}></Header>
  <Outlet context={[count, setCount, items, setItems]}></Outlet>
  </div>
}

export default App
