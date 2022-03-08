import { initializeApp } from 'firebase/app';

import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


//Configurando firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APPKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Setando configuração do firebase ao initializeApp e atribuindo-a à variável firebaseApp
const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp);