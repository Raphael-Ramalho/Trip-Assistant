import { initializeApp } from "firebase/app";

// Usually config such as the following one should not be uploaded, but since this project has no relevance, it will be stored in the repository
const firebaseConfig = {
  apiKey: "AIzaSyDZ7O-EjMDkrzyrMjxy4AjmdKzaEVg0xeU",
  authDomain: "trip-assistant-br.firebaseapp.com",
  projectId: "trip-assistant-br",
  storageBucket: "trip-assistant-br.appspot.com",
  messagingSenderId: "1064686251238",
  appId: "1:1064686251238:web:67cea17cdb0ce5f7785f27",
  measurementId: "G-WPH2FL8F4X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);