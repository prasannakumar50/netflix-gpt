// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqFdzsaKS5pMaGqZ1-n3a6aHAy7TUmobU",
  authDomain: "netflix-gpt-3b309.firebaseapp.com",
  projectId: "netflix-gpt-3b309",
  storageBucket: "netflix-gpt-3b309.appspot.com",
  messagingSenderId: "812577303146",
  appId: "1:812577303146:web:982a841cb5899dc6337813",
  measurementId: "G-E6HHCJ46DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);