 //=============================
 // 1. For search String/ Send request param from input value to php--> searchString.php
 //=============================
function showHint(str) {
    var xhttp;
    if (str.length == 0) { 
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "/php/searchString.php?q="+str, true);
    xhttp.send();   
  }
//=============================
//  2. get JSON response from the PHP -->  demoJsonReturn.php
//=============================
let btn = document.getElementById("fetchJsonRes");
btn.addEventListener("click", getJsonResponse);

function getJsonResponse(){

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'demoJsonReturn.php');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function() {
    if (xhr.status === 200) {
      // handle successful response
      var jsonResponse = xhr.response;
      let loadMsg = document.getElementById("loadJsonMsg");
      loadMsg.textContent =jsonResponse['message'];
      console.log(jsonResponse);
    } else {
      // handle error response
      console.log('Error:', xhr.status);
    }
  });
  xhr.send();
}
//=============================
//  3. read response from the JSON file --> READ JSON FILE
//=============================
let readJsonbtn = document.getElementById("readJsonRes");
readJsonbtn.addEventListener("click", ReadJsonFileResponse);

function ReadJsonFileResponse(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'readJson.json');
  xhr.responseType = 'json';

  xhr.addEventListener('load', function() {
    if (xhr.status === 200) {
      // handle successful response
    
      var readJsonResponse = xhr.response;
      console.log(JSON.stringify(readJsonResponse));
      console.log(readJsonResponse['menu']['id']);  
      let loadReadMsg = document.getElementById("loadReadJsonMsg");
      loadReadMsg.value = readJsonResponse['menu']['id'];
     
    } else {
      // handle error response
      console.log('Error:', xhr.status);
    }
  });
  xhr.send();
}

//=========================================================
//  4. set variable to request param and get variable from php --> getVariable.php
//=========================================================
let getVar = document.getElementById("getVar");
getVar.addEventListener("click", function(){

  const xhr = new XMLHttpRequest();
  let value1 = document.getElementById("inp1").value;
 
  let value2 = document.getElementById("inp2").value;
  xhr.open('GET', 'getVariable.php?var1='+value1+'&var2='+value2);
  xhr.onload = function() {
    if(xhr.status === 200) {
      console.log(xhr.responseText);

      let loadReadMsg = document.getElementById("getRes");
      loadReadMsg.value = xhr.responseText;
    }
  };
 xhr.send();

});

//=========================================================
//  5. POST variables to php server and get response log --> postData.php
//=========================================================
let postdata = document.getElementById("postdata");
postdata.addEventListener("click", function(){

  let value1 = document.getElementById("i1").value;
  let value2 = document.getElementById("i2").value;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Handle the response here
      console.log(xhttp.responseText);
    }
  };

  xhttp.open("POST", "postData.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");



  var data = "value1=" + encodeURIComponent(value1) + "&value2=" + encodeURIComponent(value2);

  xhttp.send(data);

});

//======================================================================
//  6. POST FORM DATA as json on submit, and decode json response on php --> postFormData.php
//======================================================================
let form = document.forms["savedata"];
form.addEventListener("submit", storeData);
function storeData(event){
  event.preventDefault();
  let data = {
    "fname": this.fname.value, 
    "lname": this.lname.value, 
  }
  console.log(data)
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Handle the response here
      console.log(JSON.stringify(xhttp.responseText));
    }
  };

  xhttp.open("POST", "postFormData.php", true);
  xhttp.setRequestHeader("Content-type", "application/json");
   
  xhttp.send(JSON.stringify(data));

}

//=========================================================
//  7. POST image to php server --> uploadImage.php
//=========================================================
function uploadImage() {
  // Get the selected file
  var file = document.getElementById("image").files[0];
  
  // Create a new instance of XMLHttpRequest
  var xhr = new XMLHttpRequest();
  
  // Create a FormData object
  var formData = new FormData();
  
  // Add the file to the FormData object
  formData.append("image", file);
  
  // Set up the XMLHttpRequest
  xhr.open("POST", "uploadImage.php", true);
   // Set up the XMLHttpRequest event handlers
   xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Display a success message
        alert("Image uploaded successfully.");
      } else {
        // Display an error message
        alert("Error uploading image.");
      }
    }
  };
  // Send the FormData object to the server
  xhr.send(formData);
}
//=========================================================
//  8. async data fetch
//=========================================================
