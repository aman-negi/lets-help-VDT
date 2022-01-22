
const signupform = document.querySelector('#signup-form');
// Get a reference to the database service
var database = firebase.database();
signupform.addEventListener('submit',(e) => {
  e.preventDefault();

  //user info
  var email = signupform['email_field'].value;
  var password = signupform['password_field'].value;
  var orgname1 = signupform['orgname'].value;

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    var userId = firebase.auth().currentUser.uid;
    
      firebase.firestore().collection("users").doc(userId).set({
      orgname: orgname1,
      headname: signupform['headname'].value,
      pincode: signupform['pincode'].value,
      city: signupform['city'].value,
      aadhar : signupform['aadhar'].value,
      about : signupform['about'].value,
      email : email,
      phone : signupform['phone'].value,
      address : signupform['address'].value,
      uid : userId
      
    })
    .then(function(){
      window.location.replace("login.html");
      document.getElementById("signup-form").reset();
    })
    .catch(function(error){
      window.alert("unable to enter data in database");
      document.getElementById("signup-form").reset();
    });
    

    
  });

  // Get a reference to the database service
});

