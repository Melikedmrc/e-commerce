import { createContext, useState, useEffect} from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase";
// import { signOutUser } from "../utils/firebase/firebase";

// UserContext adında bir context oluşturuyoruz ve başlangıç değerlerini belirliyoruz.
export const UserContext = createContext({
    // Başlangıçta setCurrentUser boş bir fonksiyon olacak.
    setCurrentUser : ()=> null,
    // Başlangıçta currentUser değeri null olacak.
    currentUser:null,
});

// UserProvider bileşeni oluşturuyoruz. Bu bileşen, çocuk bileşenleri sarmalıyor.
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    // Context sağlayıcısına verilecek değeri belirliyoruz.
    const value = { currentUser, setCurrentUser };

    // signOutUser(); Kullanıcıyı çıkış yaptırmak gerekti

    useEffect(()=>{
       const unsubscribe= onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
       })
       
       return unsubscribe
    }, [])

    // UserContext.Provider bileşenini kullanarak context değerini sağlıyoruz.
    // Böylece bu provider'ın çocuk bileşenleri context'e erişebilir.
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
