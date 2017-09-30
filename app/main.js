var title = document.getElementById('title');



// function boringButton() {
//     if (myDiv.style.display === 'none') {
//         myDiv.style.display = 'block';
//     } else {
//         myDiv.style.display = 'none';
//     }

// }



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
var regularFlavor;
console.log("Regular: ", regular)
for (i = 0; i <= regular.length; i++) {
    regularFlavor = document.getElementById('reg-flavors' + (i + 1))
    regularFlavor.innerHTML = 
    '<span class="reg-flavors-name col-xs-12">' + regular[i].name + '</span>' + 
    '<span class="reg-flavors-description col-xs-12">' + regular[i].description + '</span>' + 
    '<span class="reg-flavors-price col-xs-12">' + regular[i].price + '</span>';
};

   console.log(regular[0]);


     var regular1 = regular[i];

  function regFinder (){




for (i = 0; i < regular.length; i++) {
            for (j = 0; j < regular[i].length; j++) {
                reg.innerHTML = "regular[i][0]"

            };
        }}



//chocDesc.innerHTML = regular[0].description + " " + regular[0].price




// var obj = {a: 1, b: 2, c: 3};
    


// var reg = document.getElementById("reg");

// reg.innerHTML = regular[0].name;




// console.log(Object.keys(products));


// for (i=0; i < regular[i].length; i++) {
//  console.log(regular1[i])
// };


































