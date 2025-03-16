import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <li><Link to="/student">Student.jsx</Link> </li>
            <li><Link to="/employee">Employee.jsx</Link> </li>
            <li><Link to="/shopingcart">ShopingCart.jsx</Link> </li>
            <li><Link to="/productcard">ProductCard,jsx</Link> </li>
            <li><Link to="/contactcard">ContactCard.jsx</Link> </li>

        </nav>
    )
}