import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA-JYEtr67r-xevreultmyy8c-jV2euo3Q",
  authDomain: "vue-rroject.firebaseapp.com",
  databaseURL: "https://vue-rroject.firebaseio.com",
  projectId: "vue-rroject",
  storageBucket: "vue-rroject.appspot.com",
  messagingSenderId: "571110458375",
  appId: "1:571110458375:web:18ae8af5a2b970b5da56a2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
