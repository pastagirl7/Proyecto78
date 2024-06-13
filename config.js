import firebase from "firebase";
require("@firebase/firestore");

//Pega tu configuración de firebase aquí
const firebaseConfig = {
  apiKey: "AIzaSyClduR4AKAmaMWuqmnkoRIjR-VJj1O1VnE",
  authDomain: "paseo-electronico-a4403.firebaseapp.com",
  projectId: "paseo-electronico-a4403",
  storageBucket: "paseo-electronico-a4403.appspot.com",
  messagingSenderId: "842472894832",
  appId: "1:842472894832:web:e3f2bfef9296139b2c9fb5"
};





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


