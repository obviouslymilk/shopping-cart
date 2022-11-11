import NavElement from './NavElement';

export default function Navigation() {
    // Remove cart link later and make it an image button.
    return <nav>
        <ul>
            <NavElement link="/" name="Home"/>
            <NavElement link="/store" name="Store"/>
            <NavElement link="/cart" name="Cart"/>
        </ul>
    </nav>
}