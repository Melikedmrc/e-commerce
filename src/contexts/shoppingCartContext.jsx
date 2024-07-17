import { createContext, useState } from "react";

// createContext bir fonksiyon olarak çağrılır
export const CartContext = createContext();

export const CartProvider =({children})=>{
    const [isCartOpen, setIsCartOpen]= useState(false);

    const toggleCart=()=>{
        setIsCartOpen(prevSate=>!prevSate);
    }

    return(
        <CartContext.Provider value={{isCartOpen, toggleCart}}>
            {children}
        </CartContext.Provider>
    )
}