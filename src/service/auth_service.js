import firebase from "firebase/compat/app";
import firebaseApp from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  login(providerName) {
    let provider;
    if (providerName === "Google") {
      provider = new GoogleAuthProvider();
    }
    if (providerName === "Github") {
      provider = new GithubAuthProvider();
    }
    const auth = getAuth();
    return signInWithPopup(auth, provider);
    // const authProvider = new firebase.auth[`${providerName}AuthProvide`]();
    // return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
