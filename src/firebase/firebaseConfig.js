import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBFURMjUPh6gqzc1qi5Q7SUYSuGcw7bSQg",
  authDomain: "realestateapp-306601.firebaseapp.com",
  projectId: "realestateapp-306601",
  storageBucket: "realestateapp-306601.appspot.com",
  messagingSenderId: "718136628087",
  appId: "1:718136628087:web:9d5a52ba98b672165fc772"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;