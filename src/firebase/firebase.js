
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDvYCIb60s4i9VEsbB0neJPX1sYJhBcrYc",
  authDomain: "filmyworld-89b7c.firebaseapp.com",
  projectId: "filmyworld-89b7c",
  storageBucket: "filmyworld-89b7c.appspot.com",
  messagingSenderId: "857070558913",
  appId: "1:857070558913:web:ea2b5550740676e1bcbe40"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");
export default app;