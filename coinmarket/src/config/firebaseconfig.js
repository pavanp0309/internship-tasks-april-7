// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth,GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhb69U-x58PKysbovjy8IHlomXCv0p0VU",
  authDomain: "coin-market-40845.firebaseapp.com",
  projectId: "coin-market-40845",
  storageBucket: "coin-market-40845.firebasestorage.app",
  messagingSenderId: "708865579821",
  appId: "1:708865579821:web:05b438f484455a132d51a4",
  measurementId: "G-E6MZVS64Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth=getAuth(app)
let googleProvider=new GoogleAuthProvider()

export {auth,googleProvider}