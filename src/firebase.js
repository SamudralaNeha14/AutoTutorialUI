import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Createpost from "./Post";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZCNddTXdRgS5u6m9E1XqJHuOOsPTj6OA",
  authDomain: "auto-tutorials.firebaseapp.com",
  projectId: "auto-tutorials",
  storageBucket: "auto-tutorials.appspot.com",
  messagingSenderId: "1082148780039",
  appId: "1:1082148780039:web:711a26aca66fbc1e7b12a2"
};
  var fire;
  if (!firebase.apps.length) {
    fire = firebase.initializeApp(firebaseConfig);
  } else {
    fire = firebase.app(); // if already initialized, use that one
  }
  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // Use these for db & auth
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const providefb = new FacebookAuthProvider();
  export const signInWithFacebook = () => {
    signInWithPopup(auth, providefb)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const providerGh = new GithubAuthProvider();
export const signInWithGitHub =() =>
{
  signInWithPopup(auth, providerGh)
  .then((result) =>{
    console.log(result);
  })
  .catch((error) =>{
    console.log(error);
  })
}



  // export { auth, db };
  // Initialize Firebase
  // const fire = initializeApp(firebaseConfig);
  export default fire;

//------------------------------------------------------------------------------------------------------------------------------------------
// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   FacebookAuthProvider,
//   GithubAuthProvider,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDZCNddTXdRgS5u6m9E1XqJHuOOsPTj6OA",
//   authDomain: "auto-tutorials.firebaseapp.com",
//   projectId: "auto-tutorials",
//   storageBucket: "auto-tutorials.appspot.com",
//   messagingSenderId: "1082148780039",
//   appId: "1:1082148780039:web:711a26aca66fbc1e7b12a2"
// };


// var fire;
// if (!firebase.apps.length) {
//   fire = firebase.initializeApp(firebaseConfig);
// } else {
//   fire = firebase.app(); 
//   // if already initialized, use that one
// }
// // const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = fire.firestore();
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// //-------GOOGLE-------
// const provider = new GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// };
// //-------FACEBOOK-------
// const providefb = new FacebookAuthProvider();
// export const signInWithFacebook = () => {
// signInWithPopup(auth, providefb)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// };
// //--------GITHUB-----
// const providerGh = new GithubAuthProvider();
// export const signInWithGitHub =() =>
// {
//   signInWithPopup(auth, providerGh)
//   .then((result) =>{
//     console.log(result);
//   })
//   .catch((error) =>{
//     console.log(error);
//   })
// }
//  export { db };
// // Initialize Firebase
// // const fire = initializeApp(firebaseConfig);

// export default fire;
