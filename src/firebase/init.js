import firebase from 'firebase';
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyByoyDMmbOByqeikvyCVeKEtAP8Qksaqhc",
  authDomain: "days-vue-data.firebaseapp.com",
  databaseURL: "https://days-vue-data.firebaseio.com",
  projectId: "days-vue-data",
  storageBucket: "days-vue-data.appspot.com",
  messagingSenderId: "199034533547",
  appId: "1:199034533547:web:c3fef365ae89f2a155e9ee"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()
