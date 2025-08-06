
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLIS6CKaW2S94SE3B1K5x-2EPjA85bCYw",
  authDomain: "dtronicsapp-44ab7.firebaseapp.com",
  databaseURL: "https://dtronicsapp-44ab7-default-rtdb.firebaseio.com",
  projectId: "dtronicsapp-44ab7",
  storageBucket: "dtronicsapp-44ab7.firebasestorage.app",
  messagingSenderId: "270394673517",
  appId: "1:270394673517:web:02581570a85430213a3264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID',
});

export { auth, database };
