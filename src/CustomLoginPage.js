// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import ForgotPasswordButton from "./CustomForgotPassword";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "#/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // The default selected country.
      defaultCountry: "IN",
      recaptchaParameters: {
        size: "invisible", // 'invisible' or 'compact'
        // badge: "middle", //' bottomright' or 'inline' applies to invisible.
      },
    },
  ],
  // Optional callbacks in order to get Access Token from Google,Facebook,... etc
  callbacks: {
    signInSuccessWithAuthResult: (result) => {
      const credential = result.credential;
      // The signed-in user info.
      const user = result.user;
      var uid = user.uid;
      const phoneNumber = user.phoneNumber;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const accessToken = credential.accessToken;
      // console.log({ result, user, accessToken });
      console.log({ result, user });
      console.log({ uid, phoneNumber });
      //export the phonenumber to the firestore database
      return true;
    },
  },
};
let initApp = function () {
  firebase.auth().onAuthStateChanged(
    function (user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
      } else {
        // User is signed out.
        document.getElementById("sign-in-status").textContent = "Signed out";
        document.getElementById("sign-in").textContent = "Sign in";
        document.getElementById("account-details").textContent = "null";
      }
      return user;
    },
    function (error) {
      console.log(error);
    }
  );
};

window.addEventListener("load", function () {
  initApp();
  console.log("window loaded");
});
//print phone number from initapp
var auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    const phoneNumber = user.phoneNumber;
    console.log({ uid, phoneNumber });
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const SignInScreen = () => (
  <StyledFirebaseAuth
    firebaseAuth={firebase.auth()}
    uiConfig={uiConfig}
    // uiCallback={(ui) => ui.disableAutoSignIn()}
  />
);

const CustomLoginForm = (props) => (
  <div>
    {/* <LoginForm {...props} /> */}
    <SignInScreen />
  </div>
);

const CustomLoginPage = (props) => (
  <Login
    {...props}
    backgroundImage="https://cdn.wallpapersafari.com/80/94/AC21PJ.jpg"
  >
    <CustomLoginForm {...props} />
  </Login>
);

export default CustomLoginPage;
