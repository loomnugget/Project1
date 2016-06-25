<?php
// define variables and set to empty values
$name = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $message = test_input($_POST["message"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// the message
$message = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$message = wordwrap($message,70);

// send email
mail("claudia.cedfeldt@gmail.com","You've Got Mail!",$message);
?>
