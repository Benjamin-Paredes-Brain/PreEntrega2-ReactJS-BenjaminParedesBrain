// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfm2d7Kgf95vcsSiaXVyW64lDYPxPvNjU",
  authDomain: "vurdertrend-3dcd5.firebaseapp.com",
  projectId: "vurdertrend-3dcd5",
  storageBucket: "vurdertrend-3dcd5.appspot.com",
  messagingSenderId: "1016870453882",
  appId: "1:1016870453882:web:11f2a0eddc99196ace71c3",
  measurementId: "G-BRDS3LTW42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

