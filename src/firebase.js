import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCedWHvl8NMyj2dm1vFR-Jlyp1q9z_0SzA",
    authDomain: "speakeasydemo-17b5d.firebaseapp.com",
    databaseURL: "https://speakeasydemo-17b5d.firebaseio.com",
    projectId: "speakeasydemo-17b5d",
    storageBucket: "speakeasydemo-17b5d.appspot.com",
    messagingSenderId: "565986981944",
    appId: "1:565986981944:web:f730978fd79564d5eb0ecd"
  };

  firebase.initializeApp(config);
  const databaseRef = firebase.database().ref();
  export const todosRef = databaseRef.child("todos");