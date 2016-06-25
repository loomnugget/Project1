//Sticky Navbar
window.onscroll = function() {sticky_nav()};    
function sticky_nav() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
document.getElementById("nav").className = "sticky";
    } else {document.getElementById("nav").className = "";}
}

//Fruits

function getIngredients () {
  var ingredients = new Array; 
  var ingredients_str = localStorage.getItem('ingredient'); //gets the key from localstorage
    if (ingredients_str !== null) {
      //if it is the first time the function is called, returns null
        ingredients = JSON.parse(ingredients_str); 
    }
    return ingredients; //returns javascript object version from string form obtained from local storage
}
//choice is the parameter passed from clicking on a different fruit
document.getElementById('strawberry').addEventListener("click", function() {
  add("2 Strawberries");
});
document.getElementById('peach').addEventListener('click', function() {
  add("Some peaches");
});
document.getElementById('raspberry').addEventListener('click', function() {
  add("Pile of Raspberries");
});
document.getElementById('kiwi').addEventListener('click', function() {
  add("Handful of Kiwi Slices");
});
document.getElementById('pom').addEventListener('click', function() {
  add("One Large Pomegranate");
});

function add(userChoice) {
    var input = userChoice;
    var ingredients = getIngredients(); //calls function that retrieves data stored in the database
    ingredients.push(input);
    localStorage.setItem('ingredient', JSON.stringify(ingredients)); 
    displayList(); //to add to database, you have to stringify
    return false;
}

function displayList() {
  //displays ingredients as bulleted list
    var ingredients = getIngredients();
    var html = '<ul class = "mylist">';
    for(var i=0; i<ingredients.length; i++) {
        html += '<li>' + ingredients[i];
    };
    html += '</ul>'; 
    document.getElementById('ingredients').innerHTML = html;
 
}

//add click event listener
document.getElementById("enterbutton").addEventListener("click", function() {
  var input2 = document.getElementById("userinput").value;
  add(input2);
});

//Clear local storage data
function clear () {
  location.reload(false);
  localStorage.clear();
}

displayList();
document.getElementById('clearbutton').addEventListener('click', clear);




