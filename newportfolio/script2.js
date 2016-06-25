//Thank you message
    //gets value of name input
function Thankyou() {
        var input = document.getElementById("inputname").value;
        //Returns array of values split at whitespace
    input = input.split(" ");
        var firstName = input[0]; //Get first value in array
       document.getElementById('thankyoumessage').innerHTML = ("Thank you" + " " + firstName + "!  We will contact you shortly with further instructions.");
        document.getElementById('contact-wrap').style.display = "none";
}


 //Reload and Submit   
function Submit() {
    //Waits 5 seconds to reload
    var TimeOut = setTimeout(ReloadPage, 6000);
    var start = 6;
    var countdown = setInterval(function()
    { document.getElementById("reloadmessage").innerHTML ="Back to home in..." + " " + -- start;
     //stops timer at 0
    if (start == 0)
        clearInterval(countdown);
}, 1000);
    }
    //Reloads and submits form
function ReloadPage() {
    document.getElementById("contact-form").removeEventListener("submit", function(event){
    event.preventDefault()
});
    //Back to home 
    window.location = "index.html";
}

function validateForm() {
    var x = document.forms["contact-form"]["name"].value;
    var y = document.forms["contact-form"]["message"].value;
    if ((x == null || x == "")&&(y == null || y == "")){
        document.getElementById('messages').innerHTML = "Please enter a name and a message.";
       return false;
     } else if (y == null || y == "") {
        document.getElementById('messages').innerHTML = "Please enter a message.";
        return false;
    } else if (x == null || x == "") {
        document.getElementById('messages').innerHTML = "Please enter a name.";
        return false;
    } else {
        Thankyou();
        Submit();      
    }
    
}

//Form Messages
document.getElementById("contact-form").addEventListener("submit", validateForm);

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault()
});
