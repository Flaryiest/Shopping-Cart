import { useOutletContext } from "react-router-dom"
import Checkoutcard from "./Checkoutcard"
import "../styles/Checkout.css"
function Checkout() {
    console.log("test")
    let count = useOutletContext()[0]
    let setCount = useOutletContext()[1]
    let items = useOutletContext()[2]
    let setItems = useOutletContext()[3]
    let currentItems = items.filter((item) => {
        return item.number > 0
    })
    function handlePurchase() {
        alert("Congrats!")
    }
    return <div>
        <div className="checkout-organizer">
            <div className="item-title">Item</div>
            <div>Price</div>
            <div>Amount</div>
            <div>Total</div>
        </div>
        {currentItems.map((item) => {
            return <Checkoutcard title={item.title} number={item.number} price={item.price} image={item.image}></Checkoutcard>
        })}
        <div className="checkout">
            <button className="checkout-button" onClick={handlePurchase}>Checkout</button>
        </div>
    </div> 
   
}

export default Checkout