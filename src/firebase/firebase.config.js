// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBopzXCKER9Q205dkkmARVZr-lgTwpPJPw",
  authDomain: "dragon-news-aa096.firebaseapp.com",
  projectId: "dragon-news-aa096",
  storageBucket: "dragon-news-aa096.firebasestorage.app",
  messagingSenderId: "1035836196383",
  appId: "1:1035836196383:web:40490a2a43d57bf8c8372a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app