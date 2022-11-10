import { Routes, Route } from "react-router-dom";
import Home from '../containers/Home';
import Store from '../containers/Store'

export default function Main() {
    return <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
        </Routes>
    </main>
}