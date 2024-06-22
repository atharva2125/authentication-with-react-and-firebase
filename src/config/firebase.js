// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 

const firebaseConfig = {
  apiKey: "AIzaSyApexjT3KLfgOnYT_7WDJO4Q6JyC-ZhMRc",
  authDomain: "fir-course-a8352.firebaseapp.com",
  projectId: "fir-course-a8352",
  storageBucket: "fir-course-a8352.appspot.com",
  messagingSenderId: "520112956324",
  appId: "1:520112956324:web:0e56f29581e1275e125731",
  measurementId: "G-4G2DX9JRF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);