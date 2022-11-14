import { Routes, Route } from "react-router-dom";
import Home from '../containers/Home';
import Store from '../containers/Store'
import Cart from '../containers/Cart'
import data from '../data/products.json';
import { useState } from "react";
import Product from "../containers/Product";
import { findById } from "../utils/Utils";

export default function Main() {

    const [cart, setCart] = useState({});

    const handleAddToCart = (e) => {
        const id = e.target.dataset.id;
        setCart({
            ...cart,
            [id]: (cart[id] || 0) + 1
        })
    }

    return <main>
        <Routes>
            <Route index element={<Home />} />
            <Route path="store" element={<Store data={data.products} onAdd={handleAddToCart} />} />
            <Route path="product/:id" element={<Product data={data.products} onAdd={handleAddToCart} />} />
            <Route path="cart" element={<Cart cart={cart} />} />
        </Routes>
    </main>
}