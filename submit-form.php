<?php
if(isset($_GET["submit"])) {
	echo $recipient = "brentw.white@gmail.com"; //my email
	echo $subject = 'Email message from Point Plumbing';
	echo $name = $_GET["yourName"];
	echo $email = $_GET["yourEmail"];
	echo $phone = $_GET"yourPhone"];
	echo $location = $_GET["yourLocate"];
	echo $message = $_GET["yourMessage"];

$mailBody="Name: $name\nEmail: $email\n\n$message";
mail($recipient, $subject, $mailBody, "From: $name <$email>");
$thankYou="<p>Thank you! We will be in contact with you shortly.</p>";
}
?>