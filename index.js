//Email signup
//A database can be used so that we can get more details from the user.
function emailSignup() {
  var email = document.getElementById("userEmail").value;
  var password = document.getElementById("userPassword").value;
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode + "...." + errorMessage);
    window.location.replace("failure.html");
  });
}

//Google login in
function googleSigninProcess() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    var user = result.user;
    if(user){
      localStorage.setItem("firstname", user.displayName);
      localStorage.setItem("profileImage", user.photoURL);
      localStorage.setItem("email",result.user.providerData[0].email);
      localStorage.setItem("userId",result.user.providerData[0].uid);
      window.location.replace("success.html");
    }
    else{
      window.location.replace("failure.html");
    }
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log('ERROR : ' + errorCode + ' : ' + errorMessage);
    window.location.replace("failure.html");
  });
}

//GitHub sign in
function githubSignin(){
  var provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    if(user){
      localStorage.setItem("firstname", user.displayName);
      localStorage.setItem("profileImage", user.photoURL);
      localStorage.setItem("email",result.user.providerData[0].email);
      localStorage.setItem("userId",result.user.providerData[0].uid);
      window.location.replace("success.html");
    }
    else{
      window.location.replace("failure.html");
    }
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    console.log('ERROR : ' + errorCode + ' : ' + errorMessage);
    window.location.replace("failure.html");
  });
}

//Twitter sign in
function twitterSignin() {
  var provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    console.log('Signed in as : ' + user.displayName);
    console.log(result);
    if(user){
      localStorage.setItem("firstname", user.displayName);
      localStorage.setItem("profileImage", user.photoURL);
      localStorage.setItem("email",result.user.providerData[0].email);
      localStorage.setItem("userId",result.user.providerData[0].uid);
      window.location.replace("success.html");
    }
    else{
      window.location.replace("failure.html");
    }
  }).catch(function(error) {
    // Handle error.
    window.location.replace("failure.html");
  });
}

//Microsoft sign in
function microsoftSignin(){
  var provider = new firebase.auth.OAuthProvider('microsoft.com');
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var user = result.user;
    if(user){
      localStorage.setItem("firstname", user.displayName);
      localStorage.setItem("profileImage", user.photoURL);
      localStorage.setItem("email",result.user.providerData[0].email);
      localStorage.setItem("userId",result.user.providerData[0].uid);
      window.location.replace("success.html");
    } 
    else{
      window.location.replace("failure.html");
    }
  })
  .catch(function(error) {
    // Handle error.
    window.location.replace("failure.html");
  });
}
//Email sign in 
//A database can be used and data can be retrived if the login was successfull
function emailSignin() {
  var email = document.getElementById("signinemail").value;
  var password = document.getElementById("signinPassword").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode + "...." + errorMessage);
    window.location.replace("failure.html");
  });
}
