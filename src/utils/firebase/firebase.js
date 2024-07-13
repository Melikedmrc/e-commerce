//Gerekli SDK fonksiyonlarını import et
import { initializeApp } from "firebase/app";
import {
    getAuth,              //Kimlik doğrulama modülünü import et
    signInWithRedirect,   //Yönlendirme ile giriş fonksiyonunu import et
    signInWithPopup,      //Açılır pencere ile giriş fonksiyonunu import et
    GoogleAuthProvider,    //Google sağlayıcısını import et
    createUserWithEmailAndPassword ,// E-posta ve şifre ile kullanıcı oluşturma fonksiyonunu import et
    signInWithEmailAndPassword
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

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };