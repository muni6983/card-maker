import firebase from "firebase/compat/app";
import firebaseApp from "./firebase";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
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
    return signInWithPopup(auth, provider); //
    //     .then((result) => {
    //       console.log(result);
    //       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    //       const credential = GithubAuthProvider.credentialFromResult(result);
    //       const token = credential.accessToken;

    //       // The signed-in user info.
    //       const user = result.user;
    //       // ...
    //     })
    //     .catch((error) => {
    //       // Handle Errors here.
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // The email of the user's account used.
    //       const email = error.email;
    //       // The AuthCredential type that was used.
    //       const credential = GithubAuthProvider.credentialFromError(error);
    //       // ...
    //     });
  }
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
