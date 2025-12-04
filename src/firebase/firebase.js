import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCtvnP12jYlPfzA5vBNgb-7EGpW8BaEjsQ",
    authDomain: "cryptotracker-18d22.firebaseapp.com",
    projectId: "cryptotracker-18d22",
    storageBucket: "cryptotracker-18d22.firebasestorage.app",
    messagingSenderId: "63673761252",
    appId: "1:63673761252:web:cd0c744b2f4dd8ef805bf1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };