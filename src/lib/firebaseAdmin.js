// src/lib/firebaseAdmin.js
import admin from 'firebase-admin';
import serviceAccount from '../../serviceAccountKey.json'; // adjust the path as needed

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mvpegas-74832.firebaseio.com",
  });
}

export default admin;
