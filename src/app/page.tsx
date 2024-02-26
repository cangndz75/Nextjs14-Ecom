"use client"
import Navbar from "./components/frontend/Navbar";
import Hero from "./components/frontend/Hero";
import Feature from "./components/frontend/Feature";
import TrendingProducts from "./components/frontend/TrendingProducts";
import { useState } from "react";
import Cart from "./components/frontend/Cart";

export default function Home() {
  const [showCart,setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart ={setShowCart}/>
      {showCart && <Cart setShowCart={setShowCart}/>}
      <Hero />
      <Feature />
      <TrendingProducts />
    </main>
  );
}
