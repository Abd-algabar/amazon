import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAN7fekSUbnbDMVMJ7Kwi-JhnGolvzMqwo",
    authDomain: "e-19305.firebaseapp.com",
    projectId:"e-19305",
    storageBucket:"e-19305.firebasestorage.app",
    messagingSenderId: "839960063316",
    appId: "1:839960063316:web:1c936337c98a0170b7acc1",
    measurementId: "G-881YDVY6B6"
  };

  // const firebaseConfig = {
  //   apiKey: "AIzaSyAN7fekSUbnbDMVMJ7Kwi-JhnGolvzMqwo",
  //   authDomain: "e-19305.firebaseapp.com",
  //   projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
  //   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  // };

  const app =initializeApp(firebaseConfig);
  const auth= getAuth(app);
  const DB=getFirestore(app);

  export {auth,DB};
