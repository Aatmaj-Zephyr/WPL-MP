
const firebaseConfig = {
    apiKey: "AIzaSyBCm5eIm3Eh0TbLqotNgsX9m3AjW_ZUCNg",
    authDomain: "wpl-mini-project.firebaseapp.com",
    projectId: "wpl-mini-project",
    storageBucket: "wpl-mini-project.appspot.com",
    messagingSenderId: "696331304474",
    appId: "1:696331304474:web:837b7598baf25502679ba3",
    measurementId: "G-6HN1C9SXMF"
  };

  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const provider =  firebase.auth.GoogleAuthProvider();
  console.log(provider);
  
function Login(){
    console.log("click");
    const auth = firebase.auth();
auth.signInWithPopup(provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(credential);
    console.log(token);
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

}