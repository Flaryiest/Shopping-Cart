import { useOutletContext } from "react-router-dom"
import Header from "./Header"

function Shop() {
    let shopData = fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=>console.log(json))
    console.log(shopData)
    let count = useOutletContext()[0]
    let setCount = useOutletContext()[1]
    let items = useOutletContext()[2]
    let setItems = useOutletContext()[3]


    function handleClick() {
        setCount(count + 1)
    }
    return <div>
    <button type="button" onClick={handleClick}>Test</button>
    </div> 
}

export default Shop