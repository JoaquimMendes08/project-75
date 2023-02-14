import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUxHiffsb1cuVPBnyYWC1b5ufqfEHrkA0",
  authDomain: "pro-c75-acbc0.firebaseapp.com",
  projectId: "pro-c75-acbc0",
  storageBucket: "pro-c75-acbc0.appspot.com",
  messagingSenderId: "875212581926",
  appId: "1:875212581926:web:b25b01774da70aa770cae7",
  measurementId: "G-LQF10D9YHB"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
