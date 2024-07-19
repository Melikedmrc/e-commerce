//Gerekli SDK fonksiyonlarını import et
import { initializeApp } from "firebase/app";
import {
  getAuth,                           //Kimlik doğrulama modülünü import et
  signInWithRedirect,                //Yönlendirme ile giriş fonksiyonunu import et
  signInWithPopup,                   //Açılır pencere ile giriş fonksiyonunu import et
  GoogleAuthProvider,                //Google sağlayıcısını import et
  createUserWithEmailAndPassword,   // E-posta ve şifre ile kullanıcı oluşturma fonksiyonunu import et
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged                 // Kimlik doğrulama durumu değişikliği izleyicisini import et
} from "firebase/auth";

import {
  getFirestore,
  doc,                               // Firestore'dan doküman referansını import et
  getDoc,                            // Firestore'dan doküman alma fonksiyonunu import et
  setDoc,                            // Firestore'da doküman oluşturma/ayarlama fonksiyonunu import et
  collection,                         // Firestore koleksiyon fonksiyonunu import et
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";
import { cloneElement } from "react";


//Firebase yapılandırma ayarlarını tanımla
const firebaseConfig = {
  apiKey: "AIzaSyCY-lxH2FxrDo_8EkfmjWyxrMB57v8EVi0",
  authDomain: "crwn-clothing-db-57d2c.firebaseapp.com",
  projectId: "crwn-clothing-db-57d2c",
  storageBucket: "crwn-clothing-db-57d2c.appspot.com",
  messagingSenderId: "291322970568",
  appId: "1:291322970568:web:b8c3e4d9716245136240fd"
};


// Firebase uygulamasını başlat
const firebaseApp = initializeApp(firebaseConfig);

// Google sağlayıcısını oluştur
const googleProvider = new GoogleAuthProvider();

// Google sağlayıcısı için özel parametreleri ayarla
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Kimlik doğrulama nesnesini oluştur
export const auth = getAuth();

// Google ile açılır pencere aracılığıyla giriş yapma fonksiyonu
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Google ile yönlendirme aracılığıyla giriş yapma fonksiyonu
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Firestore veritabanını oluştur
export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   // 1. Belirtilen koleksiyon adına sahip bir referans oluşturur
  const collectionRef=collection(db, collectionKey);
  // 2. Yazma işlemleri için bir batch oluşturur
  const batch = writeBatch(db);

  // 3. Her bir nesne için bir belge referansı oluşturur ve batch'e ekler
  objectsToAdd.forEach((object) => {
    // Belge referansını oluşturur (Belge ID'si nesnenin başlığıdır)
    const docRef=doc(collectionRef, object.title.toLowerCase());
    // Batch'e belgeyi ekler (Belgeyi koleksiyona ekler veya mevcutsa günceller)
    batch.set(docRef, object);
  });

  // 4. Batch işlemini gerçekleştirir
  await batch.commit();
  console.log('done');
}

export const getCategoriesAndDocuments=async()=>{
  // 'categories' koleksiyonunun referansını alıyoruz
  const collectionRef=collection(db, 'categories');
  // Koleksiyondaki tüm belgeleri almak için bir sorgu oluşturuyoruz
  const q=query(collectionRef);

  // Sorguyu Firestore'a gönderip sonuçları alıyoruz
  const querySnapshot=await getDocs(q);
  // Alınan belgeleri bir haritada (map) topluyoruz
  const categoryMap=querySnapshot.docs.reduce((acc, docSnapshot)=>{
    // Her belgeden title ve items alıyoruz.
    const {title, items }=docSnapshot.data();
    
    acc[title.toLowerCase()]=items;
  return acc;
  }, {});
  return categoryMap;
}

// Kimlik doğrulama bilgileriyle kullanıcı dokümanı oluşturma fonksiyonu
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

// E-posta ve şifre ile kullanıcı oluşturma fonksiyonu
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// E-posta ve şifre ile giriş yapma fonksiyonu  
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Çıkış yapma fonksiyonu
export const signOutUser = async () => await signOut(auth);

// Kimlik doğrulama durumu değişikliği izleyicisi fonksiyonu
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

