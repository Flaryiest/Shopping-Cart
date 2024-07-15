import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import Shopcard from "./Shopcard"
import "../styles/Shop.css"
function Shop() {
    const [shopItems, setShopItems] = useState([])

    useEffect(() => {
        getShopData()
    }, [])
    async function getShopData() {
        let shopDataRequest = await fetch('https://fakestoreapi.com/products/')
        let shopData = await shopDataRequest.json()
        for (let i = 0; i in shopData; i++) {
            shopData[i].number = 0
        }
        setShopItems(shopData)
    }
    console.log(shopItems)
    
    let count = useOutletContext()[0]
    let setCount = useOutletContext()[1]
    let items = useOutletContext()[2]
    let setItems = useOutletContext()[3]


    function handleClick() {
        setCount(count + 1)
    }
    return <div className="shop">
    {shopItems.map((item) => {
        return <Shopcard key = {item.id} number = {item.number} name={item.title} image={item.image} price={"$" + item.price}></Shopcard>
    })}
    </div> 
}

export default Shop