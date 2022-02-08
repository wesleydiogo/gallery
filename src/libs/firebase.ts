import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyACi60De4mwEafXg-tyXjUMJpyYNW3_I9Q",
  authDomain: "wdreactgallery.firebaseapp.com",
  projectId: "wdreactgallery",
  storageBucket: "wdreactgallery.appspot.com",
  messagingSenderId: "404373721659",
  appId: "1:404373721659:web:346aa47f4a842fbbe3821e"

  // apiKey: process.env.REACT_APP_FIREBASE_APPKEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_FIREBASE_ADDID
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);