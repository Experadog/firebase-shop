import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { IFireConfig } from "../types/types";

const firebaseConfig:IFireConfig = {
  apiKey: "AIzaSyAz9cowsQkCMGbKEfDixNkrF7-BL-n1Fd4",
  authDomain: "shop-fire-c89e3.firebaseapp.com",
  projectId: "shop-fire-c89e3",
  storageBucket: "shop-fire-c89e3.appspot.com",
  messagingSenderId: "732524633329",
  appId: "1:732524633329:web:6836bad0a9e2cba661dd50"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const joinWithGoogle = new GoogleAuthProvider();

export {
  auth,
  joinWithGoogle,
  
}