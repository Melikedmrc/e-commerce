import { createContext, useState } from "react";
// createContext bir fonksiyon olarak çağrılır
export const CartContext = createContext();

export const CartProvider =({children})=>{
    const [isCartOpen, setIsCartOpen]= useState(false);  // Sepetin açık/kapalı durumu
    const [cartItems, setCartItems]= useState([]); // Sepetteki ürünler

    const toggleCart=()=>{
        setIsCartOpen(prevSate=>!prevSate);
    }

    //Ürün Ekleme Fonksiyonu
    // prevItems: setCartItems fonksiyonunun içindeki prevItems, mevcut cartItems değerini temsil eder. 
    const addItemToCart =(product)=>{
        setCartItems(prevItems=>{
            //sepette mevcut olup olmadığını kontrol et
            const existingCartItem =prevItems.find(item=>item.id===product.id);

            //Sepette mevcut ise
            if(existingCartItem){
                return prevItems.map(item=>
                    item.id===product.id ? {...item, quantity: item.quantity+1} : item
                )
            }

            //Eğer ürün sepette yoksa, yeni bir öğe olarak ekleyin
            return [...prevItems, {...product, quantity:1}]
        })
    }

    return(
        <CartContext.Provider value={{isCartOpen, toggleCart , cartItems, addItemToCart}}>
            {children}
        </CartContext.Provider>
    )
}