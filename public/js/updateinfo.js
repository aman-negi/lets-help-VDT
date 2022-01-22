


const dataform = document.querySelector('#dataform');


var user = firebase.auth().currentUser;
var  email, uid;

if (user != null) {
  
  email = user.email;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}


dataform.addEventListener('submit', (e) => {
  e.preventDefault();
  
// get user info
  db.collection("users").doc(uid).set({
    orgname: dataform['orgname'].value,
    headname: dataform['headname'].value,
    pincode: dataform['pincode'].value,
    city: dataform['city'].value,
    aadhar : dataform['aadhar'].value,
    about : dataform['about'].value,
    phone : dataform['phone'].value,
    address : dataform['address'].value,
    uid : uid
  });
  window.location.replace("login.html");
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});
