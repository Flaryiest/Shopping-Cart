import {useState, useEffect} from "react"
import "../styles/Shopcard.css"

function Shopcard({number, name, image, price, shopItems, setShopItems}) {
    const [amount, setAmount] = useState(Number(number))

    useEffect(() => {
        changeCart(amount)
    }, [amount])

    function changeCart(newNumber) {

        let itemIndex = shopItems.findIndex(item => item.image == image)
        let newShopItems = structuredClone(shopItems)
        newShopItems[itemIndex].number = newNumber
        setShopItems(newShopItems) 
    }

    function handleChange(event) {
        event.preventDefault()
        if (event.target.value) {
            setAmount(event.target.value)
        }
    }
    return <div className="Shopcard"> 
        <img src={image}></img>
        <h2>{name}</h2>
        <h2>{price}</h2>
        <div className="button-holder">
            {amount === 0 && <button className="addtocart" onClick={() => setAmount(amount + 1)}>Add to Cart</button>}
            {amount != 0 && <div>
                <button onClick={() => {setAmount(amount + 1)}}>+</button>
                <input value={amount} onChange={(event) => {handleChange(event)}}></input>
                <button onClick={() => {setAmount(amount - 1)}}>-</button>
            </div>}

        </div>
    </div>
}

export default Shopcard