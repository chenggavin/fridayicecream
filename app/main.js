var title = document.getElementById('title');
var regularFlavors = document.getElementById('regularFlavors');

var regf = document.getElementsByClassName('regf');
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');
var chocDesc = document.getElementById('chocDes');
var myDiv = document.getElementById('myDIV');



function boringButton() {
    if (myDiv.style.display === 'none') {
        myDiv.style.display = 'block';
    } else {
        myDiv.style.display = 'none';
    }

}



var regular = products["Regular Flavors"];

  for (i = 0; i < regular.length; i++) {
    // console.log(regular[i].name)
  };



function myChoc() {
    if (chocDesc.style.display === 'none') {
        chocDesc.style.display = 'block';
    } else {
        chocDesc.style.display = 'none';
    }
};

// regf.innerHTML = 

// chocDesc.innerHTML = regular[0].description



for (var key in regular ) {

    if (!regular.hasOwnProperty(regular)) continue;

    var obj = regular[key];
    for (var prop in obj) {
        if(!obj.hasOwnProperty(prop)) continue;
        console.log(prop + " = " + obj[prop]);
    }
}









