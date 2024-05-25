// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDr1N7z78n-94SZYJO_9epffZ70juD1zcA",
  authDomain: "fir-auth-v2-63b64.firebaseapp.com",
  projectId: "fir-auth-v2-63b64",
  storageBucket: "fir-auth-v2-63b64.appspot.com",
  messagingSenderId: "639834656855",
  appId: "1:639834656855:web:db642642d4971dc5bbd312",
  measurementId: "G-QKNBNCV22L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// setting persistence
setPersistence(auth, browserLocalPersistence);

// exporting the auth
export { auth };

export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);
export const storage = getStorage(app);
