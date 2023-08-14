
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgVM9--5gCEzZD1dz9fshZjbxd95-TpV0",
  authDomain: "house-marketplace-app-2f417.firebaseapp.com",
  projectId: "house-marketplace-app-2f417",
  storageBucket: "house-marketplace-app-2f417.appspot.com",
  messagingSenderId: "550291746811",
  appId: "1:550291746811:web:70a286768b110183a1a55e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()