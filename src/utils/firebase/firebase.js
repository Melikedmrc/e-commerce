//Gerekli SDK fonksiyonlarını import et
import { initializeApp } from "firebase/app";
import {
    getAuth,              //Kimlik doğrulama modülünü import et
    signInWithRedirect,   //Yönlendirme ile giriş fonksiyonunu import et
    signInWithPopup,      //Açılır pencere ile giriş fonksiyonunu import et
    GoogleAuthProvider    //Google sağlayıcısını import et
} from "firebase/auth";


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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);