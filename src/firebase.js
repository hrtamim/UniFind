// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9mO_cO8OqNw-gZ1aBcYNoYbdcNM7sWlc",
  authDomain: "unifind-bd.firebaseapp.com",
  projectId: "unifind-bd",
  storageBucket: "unifind-bd.appspot.com",
  messagingSenderId: "549033687188",
  appId: "1:549033687188:web:27daa58fae6b37a018dc81",
  measurementId: "G-C8YQ2LZJMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app)
export {firestore, auth, storage,app}
export default app
