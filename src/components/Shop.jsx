import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import Shopcard from "./Shopcard"
import "../styles/Shop.css"
function Shop() {
    let count = useOutletContext()[0]
    let setCount = useOutletContext()[1]
    let shopItems = useOutletContext()[2]
    let setShopItems = useOutletContext()[3]
    useEffect(() => {
        let currentCount = 0
        for (let item = 0; item in shopItems; item++) {
            if (shopItems[item].number > 0) {
                currentCount++
            }
        }
        setCount(currentCount)
    }, [shopItems])



    return <div className="shop">
    {shopItems.map((item) => {
        return <Shopcard key = {item.id} number = {item.number} name={item.title} image={item.image} price={"$" + item.price} shopItems={shopItems} setShopItems={setShopItems}></Shopcard>
    })}
    </div> 
}

export default Shop