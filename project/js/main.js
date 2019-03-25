
function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("wubba lubba dub dub");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#snuffles-image").append(`<img class="img-square" src="images/snuffles-was-my-slave-name.jpg" />`);
}

// Gets called whenever the user clicks "sign in" or "sign out".
function toggleLoginFunction() {
  if (!firebase.auth().currentUser) { // if the user's not logged in, handle login
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log("success");
    }).catch(function(error) {
      console.error("error", error);
    });
  } else { // handle logout
    firebase.auth().signOut();
  }
  //This disables the button until login or logout is successful. You'll want to replace 'login-button' with the id of your login button.
  $('#login-button').attr("disabled", true);
}