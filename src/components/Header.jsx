import {Link} from "react-router-dom"
import ShoppingCart from "../assets/ShoppingCart"
import "../styles/Header.css"
function Header({count}) {
    return <header className="header">
    <div>Cool Shop</div>
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/checkout">
          <ShoppingCart/>
          </Link>
        </li>
        <li>
          <Link to="/checkout">
          <div>{count}</div>
          </Link>
        </li>

      </ul>
    </nav>
  </header>
}

export default Header