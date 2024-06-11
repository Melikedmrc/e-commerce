//Gerekli SDK fonksiyonlarını import et
import { initializeApp } from "firebase/app";
import {
    getAuth,              //Kimlik doğrulama modülünü import et
    signInWithRedirect,   //Yönlendirme ile giriş fonksiyonunu import et
    signInWithPopup,      //Açılır pencere ile giriş fonksiyonunu import et
    GoogleAuthProvider,    //Google sağlayıcısını import et
    createUserWithEmailAndPassword // E-posta ve şifre ile kullanıcı oluşturma fonksiyonunu import et
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

//Firebase yapılandırma ayarlarını tanımla
const firebaseConfig = {
    apiKey: "AIzaSyCY-lxH2FxrDo_8EkfmjWyxrMB57v8EVi0",
    authDomain: "crwn-clothing-db-57d2c.firebaseapp.com",
    projectId: "crwn-clothing-db-57d2c",
    storageBucket: "crwn-clothing-db-57d2c.appspot.com",
    messagingSenderId: "291322970568",
    appId: "1:291322970568:web:b8c3e4d9716245136240fd"
};

// Firebase'i başlat
const firebaseApp = initializeApp(firebaseConfig);

//Google kimlik doğrulama sağlayıcısını oluştur
const provider = new GoogleAuthProvider();

//Google kimlik doğrulama sağlayıcısının parametrelerini ayarla
//'prompt:"select_accout"' ile her girişte hesap seçme penceresinin açılmasını sağlar
provider.setCustomParameters({
    prompt: "select_account"
});


//Firebase kimlik doğrulama servisini al
export const auth = getAuth();

//Google ile pop-up üzerinden kimlik doğrulama fonksiyonunu tanımla
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect=()=> signInWithRedirect(auth, provider);

//Firestore bağlantısını oluştur
export const db = getFirestore();

//Kullanıcı kimliği (uid) kullanarak firestore'da bir kullanıcı belgesi oluştur 
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if(!userAuth) return;

    //Kullanıcı belge referansını oluştur
    const userDocRef = doc(db, 'users', userAuth.uid);

    //Kullanıcı belgesini Firestore'dan al
    const userSnapshot = await getDoc(userDocRef);

    //Eğer kullanıcı belgesi yoksa, kullanıcıyı firestore'a kaydet
    if (!userSnapshot.exists()) {
        //Kullanıcı bilgilerini al
        const { displayName, email } = userAuth;
        const createdAt = new Date();


        try {
            //Kullanıcı belgesini Firestor'a kaydet
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            //Hata durumunda konsola hata mesajını yazdır
            console.error('Kullanıcı oluşturulurken hata oluştu', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return; // E-posta veya şifre yoksa, fonksiyondan çık

    return await createUserWithEmailAndPassword(auth, email,password);// Firebase kimlik doğrulama modülü ile e-posta ve şifre kullanarak kullanıcı oluştur
}