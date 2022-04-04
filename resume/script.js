function addNewWEField() {

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("paceholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);


}

// Accademy qualification
function addNewEqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here")

  let eqOb = document.getElementById("eq");
  let eqAddButtonOb = document.getElementById("aqAddButton");

  eqOb.insertBefore(newNode, eqAddButtonOb);

}



// Generate CV 


function generateCV(){
  let nameField = document.getElementById('nameField').value;

  let nameT1 = document.getElementById('nameT1');

  nameT1.innerHTML = nameField;

  //direct

  document.getElementById('nameT2').innerHTML= nameField;


  //Contact
  document.getElementById('contactT').innerHTML= document.getElementById('contactField').value;
  
//address
  document.getElementById('addressT').innerHTML= document.getElementById('addressField').value;

  //gmail

  document.getElementById('gmailT').innerHTML= document.getElementById('gmailField').value;

  //linkedIn

  document.getElementById('linkedInT').innerHTML= document.getElementById('linkedInField').value;

  //github

  document.getElementById('gitHubT').innerHTML= document.getElementById('gitHubField').value;


  //obejective

  document.getElementById('objectiveT').innerHTML= document.getElementById('objectiveField').value;

  //work ecpereience
  let wes = document.getElementsByClassName('weField');

  let str= "";

  for(let e of wes){
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML= str;
  
//accedemic

  let eqs = document.getElementsByClassName('eqField');

  let str1= "";

  for(let e of eqs){
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML= str1;

  document.getElementById('cv-forms').style.display='none';
  document.getElementById('cv-template').style.display='block';
}


///printCV


function printCV(){
  window.print();
}



