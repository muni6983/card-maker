import firebase from "firebase/compat/app";
// import { GoogleAuthProvider } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvide`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
