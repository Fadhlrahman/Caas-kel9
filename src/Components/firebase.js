// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCMrTetOatnKP5BEMy8KfXNY6DOcWPa9Q0",
  authDomain: "caas-cps.firebaseapp.com",
  databaseURL: "https://caas-cps-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "caas-cps",
  storageBucket: "caas-cps.appspot.com",
  messagingSenderId: "226245749526",
  appId: "1:226245749526:web:53b4bf49ce5bc853af3e37",
  measurementId: "G-JY5G1X1XFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { firebaseConfig, database }; // Export both firebaseConfig and database instance
