import NavElement from './NavElement';

export default function Navigation() {
    // Remove cart link later and make it an image button.
    return <nav>
        <ul>
            <NavElement link="/" name="HOME"/>
            <NavElement link="store" name="STORE"/>
        </ul>
    </nav>
}