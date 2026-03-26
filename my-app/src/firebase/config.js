import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5FfNuoVtiJG25PBIMGqTfMOI_hej3-Rg",
  authDomain: "opus-1e172.firebaseapp.com",
  projectId: "opus-1e172",
  storageBucket: "opus-1e172.firebasestorage.app",
  messagingSenderId: "286038043612",
  appId: "1:286038043612:web:153b0382f4c708729a7d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };