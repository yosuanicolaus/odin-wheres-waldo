import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxZuuDgtxXqkumUIDgPrBdTojMTtXoz8U",
  authDomain: "where-s-waldo-fa841.firebaseapp.com",
  projectId: "where-s-waldo-fa841",
  storageBucket: "where-s-waldo-fa841.appspot.com",
  messagingSenderId: "882938040200",
  appId: "1:882938040200:web:a074397d6375f8a904743d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
