import { Routes, Route } from "react-router-dom";
import Home from '../containers/Home';
import Store from '../containers/Store'
import Cart from '../containers/Cart'

export default function Main() {
    return <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </main>
}