import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDEmOKa-Tw0vhM3M3hnNNry1bkG8n3YsD4",
//   authDomain: "clone-9295c.firebaseapp.com",
//   projectId: "clone-9295c",
//   storageBucket: "clone-9295c.appspot.com",
//   messagingSenderId: "224715593435",
//   appId: "1:224715593435:web:d622fde8c1ec01be03defe",
//   measurementId: "G-YJLSVHWDZJ"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDEmOKa-Tw0vhM3M3hnNNry1bkG8n3YsD4",
  authDomain: "clone-9295c.firebaseapp.com",
  projectId: "clone-9295c",
  storageBucket: "clone-9295c.appspot.com",
  messagingSenderId: "224715593435",
  appId: "1:224715593435:web:d622fde8c1ec01be03defe",
  measurementId: "G-YJLSVHWDZJ"
};

//set up firebase app
const firebaseApp =firebase.initializeApp(firebaseConfig);
//initialise the real time database and auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
//to use db and auth outside of firebase.js export it
export {db,auth};