// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQj1lXRSi85YyPbuCDCeQuUvaS-09H3UA",
  authDomain: "registation-e2a91.firebaseapp.com",
  projectId: "registation-e2a91",
  storageBucket: "registation-e2a91.appspot.com",
  messagingSenderId: "71043924014",
  appId: "1:71043924014:web:b40ede4a2179e6bc541fbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  =  getAuth(app);
export default auth;