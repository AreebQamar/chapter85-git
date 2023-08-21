"use client"

import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    
    const [netTotal, setNetTotal] = useState(0);
    const [cart, setCart] = useState({});

    useEffect(function () {
        try {
            if (localStorage.getItem("cart")) {
                setCart(JSON.parse(localStorage.getItem("cart")));
            }
        } catch (error) {
            console.error(error);
            localStorage.clear();
            clearCart();
        }
    },[])

    function saveCart(newCart) {
        localStorage.setItem("cart", JSON.stringify(newCart));

        var total = 0;
        const keys = Object.keys(newCart);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            total += newCart[key].price * newCart[key].qty;
        }

         setNetTotal(total);
    }
    function addToCart(itemId, name, varient, price) {
        let newCart = cart;
        //console.log(itemId, name, varient, price)
        if (itemId in newCart) {
            newCart[itemId].qty = newCart[itemId].qty + 1;
        }
        else {
            newCart[itemId] = { qty: 1, name, varient, price };
        }
        //console.log(newCart);
        setCart(newCart);
        saveCart(newCart);
    }

    function reduceQuantity(itemId) {
        let newCart = cart;

        if (itemId in newCart) {
            if (newCart[itemId].qty > 0) {
                newCart[itemId].qty = newCart[itemId].qty - 1;
            }
            else {
                delete newCart[itemId]
            }
        }

        setCart(newCart);
        saveCart(newCart);
    }
    function clearCart() {
        setCart({});
        saveCart({});
    }

    return (
        <CartContext.Provider value={{cart, netTotal, addToCart, reduceQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };