import { createContext, useState, useEffect  } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
     // Sepetin açık/kapalı durumunu yönetmek için bir state oluşturur.
    const [isCartOpen, setIsCartOpen] = useState(false);
    // Sepetteki ürünleri yönetmek için bir state oluşturur.
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);


    // Sepetin açık/kapalı durumunu değiştiren bir fonksiyon.
    const toggleCart = () => {
        setIsCartOpen(prevState => !prevState);
    };

     // Sepete ürün ekleyen ve mevcut ürünün miktarını artıran bir fonksiyon.
    const addItemToCart = (product) => {
        setCartItems(prevItems => {
            // Sepette mevcut olup olmadığını kontrol eder.
            const existingCartItem = prevItems.find(item => item.id === product.id);

            // Eğer ürün sepette mevcut ise, miktarını artırır.
            if (existingCartItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            // Eğer ürün sepette yoksa, yeni bir öğe olarak ekler.
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

     // Sepetten ürün çıkaran ve miktarını azaltan bir fonksiyon.
    const removeItemFromCart = (product) => {
        setCartItems(prevItems => {
            // Sepette mevcut olup olmadığını kontrol eder.
            const existingCartItem = prevItems.find(item => item.id === product.id);

            if (existingCartItem) {
                // Eğer ürün miktarı 1 ise, sepetten tamamen çıkarır.
                if (existingCartItem.quantity === 1) {
                    return prevItems.filter(item => item.id !== product.id);
                }

                // Eğer ürün miktarı 1'den fazla ise, miktarını azaltır.
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }

            return prevItems;
        });
    };

    const clearItemFromCart = (product) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
    };

     // Sepet toplamını hesaplayan fonksiyon
     useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(total);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ isCartOpen, toggleCart, cartItems, cartTotal,addItemToCart, removeItemFromCart,clearItemFromCart  }}>
            {children}
        </CartContext.Provider>
    );
};
