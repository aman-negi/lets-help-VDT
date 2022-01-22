firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    var userId = firebase.auth().currentUser.uid;
    db.collection('users').doc(userId).get().then(doc => {
        var email = user.email;
        var organizationame = doc.data().orgname;
        var headname = doc.data().headname;
        var pincode = doc.data().pincode;
        var city = doc.data().city;
        var aadhar = doc.data().aadhar;
        var about = doc.data().about;
        var phone = doc.data().phone;
        var address = doc.data().address;

        document.getElementById("email").innerHTML = "Email : </br>"+email;
        document.getElementById("phone").innerHTML = "Mobile no. : "+phone;
        document.getElementById("pincode").innerHTML = "Pincode : "+pincode;
        document.getElementById("city").innerHTML = "City : "+city;
        document.getElementById("orgname").innerHTML = "ORGANIZATION : " + organizationame;
        document.getElementById("headname").innerHTML = "Headname : " + headname;
        document.getElementById("about").innerHTML = about;
        document.getElementById("aadhar").innerHTML = "aadhar no. : " + aadhar;
        document.getElementById("address").innerHTML = "Address : " + address;

    });

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function expandnav() {
  var x = document.getElementById("navbarTogglerDemo01");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function logout(){
  firebase.auth().signOut();
  window.location.replace("index.html");

}
