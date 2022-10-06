import firebase from "firebase/compat/app"
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDYYhQ6lGsyz2Ql8vVLi694k7vb6s43Scg",
    authDomain: "vibevoyage-7dde1.firebaseapp.com",
    projectId: "vibevoyage-7dde1",
    storageBucket: "vibevoyage-7dde1.appspot.com",
    messagingSenderId: "170427732902",
    appId: "1:170427732902:web:f0c0d75215115d330af567",
    measurementId: "G-M5PNTNZD4P"
  };

//   initialize firebase app
firebase.initializeApp(firebaseConfig);

// set up provider for Google Sign in
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// ** Define Login Logout actions **
// login    
function login() {
    return auth.signInWithPopup(provider);
};
// logout
function logout() {
    return auth.signOut();
};

// export functionality

export {
    login,
    logout,
    auth
}