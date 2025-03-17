// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCicCairaS4orzqGj23Su1FDQdl1akX7ks",
  authDomain: "tendayproject.firebaseapp.com",
  projectId: "tendayproject",
  storageBucket: "tendayproject.firebasestorage.app",
  messagingSenderId: "411002769806",
  appId: "1:411002769806:web:51898f3260aba3c65254df",
  measurementId: "G-4QQ3WMTYZM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);