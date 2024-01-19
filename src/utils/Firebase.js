// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7XIGjiPKMRLOSTTlCp8Q7q5i5387xYrU",
  authDomain: "netflix-gpt-5843a.firebaseapp.com",
  projectId: "netflix-gpt-5843a",
  storageBucket: "netflix-gpt-5843a.appspot.com",
  messagingSenderId: "510828440622",
  appId: "1:510828440622:web:04368e070be55fb16dc3bf",
  measurementId: "G-72BVK0WWL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();