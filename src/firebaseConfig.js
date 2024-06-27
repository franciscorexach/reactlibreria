import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJcU1Bph6rT8gQtIeXN1rQ1e4WO2xMKMc",
  authDomain: "react-libreria-e4376.firebaseapp.com",
  projectId: "react-libreria-e4376",
  storageBucket: "react-libreria-e4376.appspot.com",
  messagingSenderId: "502826520078",
  appId: "1:502826520078:web:051443e56ff3f03d15365f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)