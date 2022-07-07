// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHRC3Aq7SjIgaKWYlVt-TxW75KNe1diVQ",
  authDomain: "memory-gallery-97071.firebaseapp.com",
  projectId: "memory-gallery-97071",
  storageBucket: "memory-gallery-97071.appspot.com",
  messagingSenderId: "282342338431",
  appId: "1:282342338431:web:468c9e577773d5d276344a",
  measurementId: "G-R92HRKT9CJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
