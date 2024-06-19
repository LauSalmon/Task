import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {

    apiKey: "AIzaSyCMr2eIn9Ku96q7h-KTLBZe1z12ILr5Tco",
    authDomain: "tasks-dc1df.firebaseapp.com",
    databaseURL: "https://tasks-dc1df-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tasks-dc1df",
    storageBucket: "tasks-dc1df.appspot.com",
    messagingSenderId: "941910829611",
    appId: "1:941910829611:web:85eaebb7c846492821586e"
  
  };
  

  firebase.initializeApp(firebaseConfig);

  export default firebase.database();