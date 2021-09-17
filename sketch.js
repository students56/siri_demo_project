var database;

var FnameV,LnameV,RnoV,GrdV, gender,pincode,age;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

}

function displayRadioValue() {
  var ele = document.getElementsByName('gender');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
         gender = "Gender: "+ele[i].value;
  }
}

function INSERT() 
{
  // Create a Node(table to store new  data)

  //Add to Node
  FnameV = document.getElementById("fname").value;
  LnameV = document.getElementById("lname").value;
  RnoV = document.getElementById("rno").value;

  var select = document.getElementById('grd');
  var GrdV = select.options[select.selectedIndex].value;
  displayRadioValue();
  firebase.database().ref('Student/info').set({
    'fName': FnameV,
    'lName': LnameV,
    'Grade': GrdV,
    'rollNo': RnoV,
    'Gender':  gender
  });

}

function SELECT() 
{
  //Select the ID and search
   firebase.database().ref('Student/info').on('value',function(snapshot){
    document.getElementById("fname").value = snapshot.val().fName;
    document.getElementById("lname").value = snapshot.val().lName;
    document.getElementById("rno").value = snapshot.val().rollNo;
  });

}

function showError(){
  console.log("Error in writing to the database");
}
