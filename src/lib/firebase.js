import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgQq7yp_PwSCA-XooEX22myt4h9FNyrfc',
  authDomain: 'mvpegas-74832.firebaseapp.com',
  projectId: 'mvpegas-74832',
  storageBucket: 'mvpegas-74832.appspot.com',
  messagingSenderId: '123456789012',
  appId: '1:123456789012:web:abcd1234efgh5678ijkl90'
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Authentication
export const auth = getAuth(app);
