// src/lib/firebaseClient.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgQq7yp_PwSCA-XooEX22myt4h9FNyrfc",
  authDomain: "mvpegas-74832.firebaseapp.com",
  projectId: "mvpegas-74832",
  storageBucket: "mvpegas-74832.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcd1234efgh5678ijkl90"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
