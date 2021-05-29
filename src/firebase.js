import firebase from "firebase/app";
import "firebase/auth";



export const auth=firebase.initializeApp({
  apiKey: "AIzaSyAmykZIBz8MaGc30Ezn-fgY1SS_GM5mUEo",
  authDomain: "let-s-chat-35f31.firebaseapp.com",
  projectId: "let-s-chat-35f31",
  storageBucket: "let-s-chat-35f31.appspot.com",
  messagingSenderId: "419030061513",
  appId: "1:419030061513:web:6dcb0b86d0a3cdd3f31818"
  }).auth();