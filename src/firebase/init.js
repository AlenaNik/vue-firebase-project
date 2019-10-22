import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCHno-VAwGeEEJXQ7orE7aJgpIHDRLH4Dw",
  authDomain: "vue-chat-project-ef136.firebaseapp.com",
  databaseURL: "https://vue-chat-project-ef136.firebaseio.com",
  projectId: "vue-chat-project-ef136",
  storageBucket: "vue-chat-project-ef136.appspot.com",
  messagingSenderId: "800526629755",
  appId: "1:800526629755:web:b10481479668805cbd1bde"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

