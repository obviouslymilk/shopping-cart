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
            [id]: {
                data: findById(data.products, id),
                quantity: (cart[id]?.quantity || 0) + 1
            }
        })
    }

    // it means not completely remove item from the curt but reduce its quantity
    const handleRemoveFromCart = (e) => {
        
    }

    const handleDeleteFromCart = (e) => {
        const id = e.target.dataset.id;
        const cartCopy = { ...cart }
        delete cartCopy[id]
        setCart(cartCopy);
    }

    return <main>
        <Routes>
            <Route index element={<Home />} />
            <Route path="store" element={<Store data={data.products} onAdd={handleAddToCart} />} />
            <Route path="product/:id" element={<Product data={data.products} onAdd={handleAddToCart} />} />
            <Route path="cart" element={<Cart cart={cart} onDelete={handleDeleteFromCart} />} />
        </Routes>
    </main>
}