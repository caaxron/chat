// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5stfrfaLePm38CqARYOrwIDgc5mpevko",
  authDomain: "chat-f53b2.firebaseapp.com",
  projectId: "chat-f53b2",
  storageBucket: "chat-f53b2.appspot.com",
  messagingSenderId: "995126412197",
  appId: "1:995126412197:web:a10f60197faf080a885e4c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
