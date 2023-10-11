import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQS8A8deyRPJMGpRGhYjnPcLEG8-lLmTI",
  authDomain: "coindcx-a7118.firebaseapp.com",
  projectId: "coindcx-a7118",
  storageBucket: "coindcx-a7118.appspot.com",
  messagingSenderId: "303545388508",
  appId: "1:303545388508:web:f4bc188f3b0e5d998c5319"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);

