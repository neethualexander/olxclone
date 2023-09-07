import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
 
const firebaseConfig = {

  apiKey: "AIzaSyAFfsata40hNwI3wvnPUH9jGf-xViFRWzk",

  authDomain: "olxdatabase-6aa2b.firebaseapp.com",

  projectId: "olxdatabase-6aa2b",

  storageBucket: "olxdatabase-6aa2b.appspot.com",

  messagingSenderId: "841981527337",

  appId: "1:841981527337:web:59a3158860ed60c0812338",

  measurementId: "G-QK7SLCMFZH"

};
  export default firebase.initializeApp(firebaseConfig)