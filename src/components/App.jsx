import { useState, useEffect } from 'react'
import '../styles/App.css'
import Header from './Header'
import {Outlet} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])

  useEffect(() => {
    getShopData()
    console.log("test")
}, [])
async function getShopData() {
    let shopDataRequest = await fetch('https://fakestoreapi.com/products/')
    let shopData = await shopDataRequest.json()
    for (let i = 0; i in shopData; i++) {
        shopData[i].number = 0
    }
    setItems(shopData)
}
  return <div>
  <Header count={count}></Header>
  <Outlet context={[count, setCount, items, setItems]}></Outlet>
  </div>
}

export default App
