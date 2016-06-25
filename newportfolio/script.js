//Sticky Navbar
window.onscroll = function() {sticky_nav()};    
function sticky_nav() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
document.getElementById("nav").className = "sticky";
    } else {document.getElementById("nav").className = "";}
}

//Rock, Paper, Lizard Entry Game

//Compares user input with computer choice and displays messages
var compare = function (user, computer) {
    if (computer===user) {
        document.getElementById("entermessage").innerHTML = ("Tie! Play again!"); 
    } else if (user === "rock") {
        if (computer === "lizard") {
            document.getElementById("entermessage").innerHTML = ("You win! Welcome to the gallery!");
            document.getElementById("gallery").style.display = "block";
            document.getElementById("pageheader").style.display = "none";
        } else {
            document.getElementById("entermessage").innerHTML = ("You lose! Play again!");
        }
    } else if (user === "paper"){
        if (computer === "rock") {
            document.getElementById("entermessage").innerHTML = ("You win! Welcome to the gallery!");
            document.getElementById("gallery").style.display = "block";
            document.getElementById("pageheader").style.display = "none";
        } else {
            document.getElementById("entermessage").innerHTML = ("You lose! Play again!");
        }
    } else if (user === "lizard"){
         if (computer === "paper") {
            document.getElementById("entermessage").innerHTML = ("You win! Welcome to the gallery!");
            document.getElementById("gallery").style.display = "block";
            document.getElementById("pageheader").style.display = "none";
        } else {
            document.getElementById("entermessage").innerHTML = ("You lose! Play again!"); }
}
};

function playGame(choice) {
    var userChoice = choice;
    var computerChoice = Math.random();
    document.getElementById("usermessage").innerHTML = "User choice: " + userChoice;
    
    if (computerChoice < 0.34) {
	   computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
	   computerChoice = "paper";
    } else {
	   computerChoice = "lizard";
    } document.getElementById("computermessage").innerHTML = ("Computer: " + computerChoice); 
    compare (userChoice, computerChoice);
}


//Set up variables
var rock = "rock"; var paper = "paper"; var lizard = "lizard";

//Add Event Listeners
document.getElementById("rock").addEventListener("click", function(){ playGame(rock); });
document.getElementById("paper").addEventListener("click", function() { playGame(paper); }); 
document.getElementById("lizard").addEventListener("click", function() { playGame(lizard); }); 

