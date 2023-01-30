<?php

$firstname = htmlspecialchars($_POST['firstname']);
$firstname = urldecode($firstname);
$firstname = trim($firstname);

$lastname = htmlspecialchars($_POST['lastname']);
$lastname = urldecode($lastname);
$lastname = trim($lastname);

$phone = htmlspecialchars($_POST['phone']);
$phone = trim($phone);

$message = htmlspecialchars($_POST['message']);
$message = urldecode($message);
$message = trim($message);

$to = "yourMail@gmail.com";
$subject = "=?utf-8?B?".base64_encode("From SaveUA")."?=";
$headers = "From: $to\r\nReply-to: $to\r\nContent-type: text/html; charset=utf-8\r\n";
$msg = "\n\nІм'я: " . $firstname . "\n\nПрізвище: " . $lastname . "\n\nТелефон: " . $phone . "\n\nПовідомлення: " . $message . "\n\n";

$success = mail($to, $subject, $msg, $headers);
echo $success;




?>
