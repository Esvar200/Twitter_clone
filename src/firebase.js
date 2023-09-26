import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBm9Cw9K3Z_aIS4k40kxGpknGqwfnZvUbA",
    authDomain: "twitter-clone-a5627.firebaseapp.com",
    projectId: "twitter-clone-a5627",
    storageBucket: "twitter-clone-a5627.appspot.com",
    messagingSenderId: "139379855552",
    appId: "1:139379855552:web:b03f0214ac3231c4db9d25",
    measurementId: "G-BZQF07TB95"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.fireStore()
  export default db;