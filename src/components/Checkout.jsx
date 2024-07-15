import { useOutletContext } from "react-router-dom"

function Checkout() {
    let count = useOutletContext()[0]
    let setCount = useOutletContext()[1]
    let items = useOutletContext()[2]
    let setItems = useOutletContext()[3]
    return <div>
        Test
    </div> 
   
}

export default Checkout