import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDq_aVuLvWr91PdAuwwbmYHUS_dC83aS1E",
  authDomain: "home-page-3297e.firebaseapp.com",
  projectId: "home-page-3297e",
  storageBucket: "home-page-3297e.appspot.com",
  messagingSenderId: "959539534878",
  appId: "1:959539534878:web:485e37637219b3a9dda20f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);