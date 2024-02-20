// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrIvctJTTA8-9819PO7_oLDEUAnkSSCS8",
  authDomain: "registration-form-d57f1.firebaseapp.com",
  projectId: "registration-form-d57f1",
  storageBucket: "registration-form-d57f1.appspot.com",
  messagingSenderId: "1048420568358",
  appId: "1:1048420568358:web:abae5fdc7124952ffb45e7",
  measurementId: "G-Z9GPNT9WDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics