import {getApp , getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9XW6Fhv9DbH-VJOoCpsb77AfpykWniBs",
  authDomain: "chatgpt-messenger-yt-378812.firebaseapp.com",
  databaseURL: "https://chatgpt-messenger-yt-378812-default-rtdb.firebaseio.com",
  projectId: "chatgpt-messenger-yt-378812",
  storageBucket: "chatgpt-messenger-yt-378812.appspot.com",
  messagingSenderId: "689374930683",
  appId: "1:689374930683:web:22a4473c662c2842dcb25e"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};