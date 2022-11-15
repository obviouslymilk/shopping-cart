import { Link } from 'react-router-dom';
import Navigation from './header/Navigation'
import '../styles/Header.scss'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'

export default function Header({quantity}) {
    // add logo on the left and shop with search on the right
    return <header>
        <img id="logo" src={logo} alt="LEGO" />
        <Navigation />
        <Link to="cart" id="cart-button"><img src={cart} alt="Cart" /></Link>
    </header>
}