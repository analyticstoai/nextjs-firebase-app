import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

if (typeof window !== 'undefined' && firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: "AIzaSyBIa4CnEGSiBaUcchyJ1guLOFcpoiY0aTY",
    authDomain: "squareroot-3b5cb.firebaseapp.com",
    projectId: "squareroot-3b5cb",
    storageBucket: "squareroot-3b5cb.appspot.com",
    messagingSenderId: "123285210740",
    appId: "1:123285210740:web:eb9576f06e2d2adf8eb321",
    measurementId: "G-86PC67BGDX"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}