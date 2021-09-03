import firebase  from "firebase";
import { initializeApp } from "firebase";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};


const firebaseapp = firebase.initializeApp(firebaseConfig);
export default firebaseapp