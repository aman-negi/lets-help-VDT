const searchlist = document.querySelector('#search-list');
document.getElementById("info-page").style.display = "none";

const searchform = document.querySelector('#searchform');
searchform.addEventListener('submit',(e) => {
    e.preventDefault();
    
 
   var pincode = searchform['pincode'].value;
   
   var ul = document.getElementById("search-list");
   var lis = ul.getElementsByTagName("li")
   while(lis.length > 0) {
       ul.removeChild(lis[0]);
   }
    /*
   var root =document.getElementById("search-list");
   var lis = root.getElementsByTagName("li");
    for(var i = 0, il = lis.length;i<il;i++) {
       root.removeChild(lis[i]);
   }
   */

   if(searchinfirebase(pincode)){
    //document.getElementById("infopage").style.display = "block";
    //document.getElementById("searchpage").style.display = "block";
    
   }
   else{
    document.getElementById("noresult").innerHTML = "Wait for a moment and still if list doesn't show up then<br />"+
    "no organization data found <br /> <a href = 'signup.html'> enter about organization</a>";
   }

   

});

//firebase search
function searchinfirebase(pincode){
    firebase.firestore().collection("users").where("pincode", "==", pincode)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots

            document.getElementById("noresult").style.display = "none";
            document.getElementById("info-page").style.display = "none";

            
            searchresult(doc);
            
        });
    })
    .then(function(){
        
        document.getElementById("searchform").reset();

      })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        
    });

}





function searchresult(doc){
    let li = document.createElement('li');
    let finder = document.createElement('button');
    
    let orgname = document.createElement('span');
    let headname = document.createElement('span');

    var uid = doc.id;

    
    finder.setAttribute("id", "search");
    finder.setAttribute("type", "submit");                     
    finder.setAttribute("value", 'search');
    finder.textContent = "know about";
    //finder.setAttribute('onclick()', "getinfo(uid)");
    

    finder.onclick = function() { 
        if(getinfo(uid)){
              
        } 
    };
   


    //li.setAttribute('orgid',doc.id);
    //li.setAttribute('onclick()',"'infoabtorg(orgid)'");
    
    orgname.textContent = "Orgname: " + doc.data().orgname;
    headname.textContent = "Headname: " + doc.data().headname;


    

    

    li.appendChild(orgname);
    li.appendChild(headname);

    li.appendChild(finder);



    searchform.appendChild(li);
    var useridlink = document.createElement("input");
    useridlink.id = "uniqueIdentifier";
    useridlink.type = "hidden";                     
    useridlink.value = doc.id;
    useridlink.className = "ListItem";


}

function getinfo(uid){

    var ul = document.getElementById("search-list");
    var lis = ul.getElementsByTagName("li")
    while(lis.length > 0) {
        ul.removeChild(lis[0]);
    }

    //getting data from firestore
    document.getElementById("info-page").style.display = "block";
    document.getElementById("searchpage").style.display = "none";
    

    firebase.firestore().collection('users').doc(uid).get().then(doc => {
        var email = doc.data().email;
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

}