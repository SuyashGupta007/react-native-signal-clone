import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGRMibMJmwpw86eAaroyBfPJihSTNn_ww",
  authDomain: "signal-clone-yt-build-a8045.firebaseapp.com",
  projectId: "signal-clone-yt-build-a8045",
  storageBucket: "signal-clone-yt-build-a8045.appspot.com",
  messagingSenderId: "811496083183",
  appId: "1:811496083183:web:6e4d01293247f0ee89551a",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
