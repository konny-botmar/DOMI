// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC60rgEm_x91ubrcxOgNsv_jLVvi81ZQi0",
  authDomain: "domi-3255c.firebaseapp.com",
  projectId: "domi-3255c",
  storageBucket: "domi-3255c.appspot.com",
  messagingSenderId: "647732524110",
  appId: "1:647732524110:web:69e6de918b9fabc2f2ff1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);

export {auth}