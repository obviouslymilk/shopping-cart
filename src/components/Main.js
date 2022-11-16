import { Routes, Route } from "react-router-dom";
import Home from '../containers/Home';
import Store from '../containers/Store'
import Cart from '../containers/Cart'
import Checkout from '../containers/Checkout'
import data from '../data/products.json';
import { useState } from "react";
import Product from "../containers/Product";
import { findById } from "../utils/Utils";
import PurchaseDialog from "./store/PurchaseDialog";

export default function Main() {

    const [cart, setCart] = useState({});
    const [purchased, setPurchased] = useState({});

    const handleAddToCart = (e) => {
        const id = e.target.dataset.id;
        const product = findById(data.products, id);
        setCart({
            ...cart,
            [id]: {
                data: product,
                quantity: (cart[id]?.quantity || 0) + 1
            }
        })

        setPurchased(product);
    }

    // it means not completely remove item from the curt but reduce its quantity
    const handleRemoveFromCart = (e) => {
        const id = e.target.dataset.id;
        setCart({
            ...cart,
            [id]: {
                data: findById(data.products, id),
                quantity: Math.max((cart[id].quantity) - 1, 0)
            }
        })
    }

    const handleDeleteFromCart = (e) => {
        const id = e.target.dataset.id;
        const cartCopy = { ...cart }
        delete cartCopy[id]
        setCart(cartCopy);
    }

    const handleAddFromStore = (e) => {
        const dialog = document.querySelector("#purchase-dialog");
        dialog.showModal();
        dialog.focus();
        handleAddToCart(e);
    }

    const handleClosePurchased = (e) => {
        const dialog = document.querySelector("#purchase-dialog");
        dialog.close();
    }

    return <main>
        <PurchaseDialog image={purchased.thumbnail} name={purchased.title} price={purchased.price} onClose={handleClosePurchased} />
        <Routes>
            <Route index element={<Home />} />
            <Route path="store" element={<Store data={data.products} onAdd={handleAddFromStore} />} />
            <Route path="product/:id" element={<Product data={data.products} onAdd={handleAddToCart} />} />
            <Route path="cart" element={<Cart cart={cart} onDelete={handleDeleteFromCart} onRemove={handleRemoveFromCart} onAdd={handleAddToCart} />} />
            <Route path="checkout" element={<Checkout />} />
        </Routes>
    </main>
}