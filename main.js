import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkz_uL_enQAF5wl4XqdGuIkVj_w_PKoPw",
  authDomain: "pluto-api-6faa2.firebaseapp.com",
  projectId: "pluto-api-6faa2",
  storageBucket: "pluto-api-6faa2.appspot.com",
  messagingSenderId: "546499250785",
  appId: "1:546499250785:web:61b27add082b4a0925f820",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
