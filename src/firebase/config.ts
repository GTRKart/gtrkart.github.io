// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD7rksCGoldsnfaHbwjbqLj2CXt9yV3xoQ',
  authDomain: 'gtr-racing.firebaseapp.com',
  projectId: 'gtr-racing',
  storageBucket: 'gtr-racing.appspot.com',
  messagingSenderId: '556212710456',
  appId: '1:556212710456:web:0d657172eab6cb921b4acd',
  measurementId: 'G-XVCHJ3SZ0Q',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth();

export { analytics, auth, db, firebaseApp };
