import "../styles/Checkoutcard.css"

function Checkoutcard({title, price, number, image}) {
    const totalPrice = price * number
    return <div className="checkout-card">
        <div >
            <div class="item-header">
            {title}
            <img src={image}></img>
            </div>
        </div>
        <div>{"$" + price}</div>
        <div>{number}</div>
        <div>{"$" + totalPrice}</div>

    </div>
}

export default Checkoutcard