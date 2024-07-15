import "../styles/Shopcard.css"

function Shopcard({number, name, image, price}) {
    return <div className="Shopcard"> 
        <img src={image}></img>
        <h2>{name}</h2>
        <h2>{price}</h2>
    </div>
}

export default Shopcard