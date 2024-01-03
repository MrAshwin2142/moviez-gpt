// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR7DHViHm-ADIfPhcRKJsJPyZ-RIoxGtg",
  authDomain: "moviezgpt.firebaseapp.com",
  projectId: "moviezgpt",
  storageBucket: "moviezgpt.appspot.com",
  messagingSenderId: "424987796240",
  appId: "1:424987796240:web:ff8f1437eaa97872eb7b95",
  measurementId: "G-860G72HNNL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();