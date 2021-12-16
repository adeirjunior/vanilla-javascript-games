// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY9Kd8Ynxb5F85T0IbKkrxF0kgfYtQhnk",
  authDomain: "memory-game-98183.firebaseapp.com",
  projectId: "memory-game-98183",
  storageBucket: "memory-game-98183.appspot.com",
  messagingSenderId: "644367887369",
  appId: "1:644367887369:web:a90201925f077269b65cd8",
  measurementId: "G-0K07NH3W7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default fire;