var title = document.getElementById('title');


function buildMenu (columnName, className) {
    var menuType = products[columnName];
    var menuItem;
    for (var i = 0; i < menuType.length; i++) {
        menuItem = document.getElementById(className + (i + 1));
        menuItem.innerHTML = 
        '<span class="' + className + '-name col-xs-12">' + menuType[i].name + '</span>' +
        '<span class="' + className + '-description col-xs-12">' + menuType[i].description + '</span>' +
        '<span class="' + className + '-price col-xs-12">' + menuType[i].price + '</span>';
    };
};

buildMenu("Regular Flavors", "reg-flavors");
buildMenu("Seasonal Flavors", "season-flavors");
buildMenu("Serving Options", "cup-cone");
buildMenu("Toppings", "sugar-type");

