//import firebase from 'firebase';
//import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAPzOMgGHC393BGoCDzc9-7SlT78tWugro",
  authDomain: "my-app-1324c.firebaseapp.com",
  projectId: "my-app-1324c",
  storageBucket: "my-app-1324c.appspot.com",
  messagingSenderId: "477177496703",
  appId: "1:477177496703:web:d85013159d4f17b7d4eb4a",
  measurementId: "G-3LN2X0T1VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;
