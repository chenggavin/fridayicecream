var title = document.getElementById('title');
var regularFlavors = document.getElementById('regularFlavors');

var regf = document.getElementsByClassName('regf');
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');
var chocDesc = document.getElementById('chocDes');
var myDiv = document.getElementById('myDIV');
var chocDescA = document.getElementById('chocDesA');



function boringButton() {
    if (myDiv.style.display === 'none') {
        myDiv.style.display = 'block';
    } else {
        myDiv.style.display = 'none';
    }

}






function myChoc() {
    if (chocDesc.style.display === 'none') {
        chocDesc.style.display = 'block';
    } else {
        chocDesc.style.display = 'none';
    }
};
function myChocA() {
    if (chocDescA.style.display === 'none') {
        chocDescA.style.display = 'block';
    } else {
        chocDescA.style.display = 'none';
    }
};


// regf.innerHTML = 



var regular = products["Regular Flavors"];

  for (i = 0; i < regular.length; i++) {
    console.log(regular[i])

    
  };
  var regular1 = regular[i];

for (i = 0; i < regular1; i++){
    console.log()
}




chocDesc.innerHTML = regular[0].description + " " + regular[0].price













