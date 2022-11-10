import NavElement from './NavElement';

export default function Navigation() {
    return <nav>
        <ul>
            <NavElement link="/" name="Home"/>
            <NavElement link="/store" name="Store"/>
        </ul>
    </nav>
}