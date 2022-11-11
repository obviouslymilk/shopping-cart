import { Routes, Route } from "react-router-dom";
import Home from '../containers/Home';
import Store from '../containers/Store'
import Cart from '../containers/Cart'
import data from '../data/products.json';
import { useState } from "react";
import Product from "../containers/Product";

export default function Main() {
    return <main>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/store" element={<Store data={data.products} />} />
            <Route path="/product/:id" element={<Product data={data.products} />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </main>
}