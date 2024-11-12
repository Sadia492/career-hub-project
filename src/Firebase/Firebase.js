// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVP5r5yp3O7o8JyCozIoib-ycdx8jzP-c",
  authDomain: "career-hub-242bd.firebaseapp.com",
  projectId: "career-hub-242bd",
  storageBucket: "career-hub-242bd.firebasestorage.app",
  messagingSenderId: "982444756614",
  appId: "1:982444756614:web:8190b5dc5b9ecd11540b07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
