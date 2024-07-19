// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCbg1DfTE1UyjckUZeKsRCYiQHoLvxGaI0",
  authDomain: "e-store-2113a.firebaseapp.com",
  projectId: "e-store-2113a",
  storageBucket: "e-store-2113a.appspot.com",
  messagingSenderId: "166445868062",
  appId: "1:166445868062:web:55eeb5eb57dde0c5cb7a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB= getFirestore(app)
const auth=getAuth(app)
export {fireDB, auth};