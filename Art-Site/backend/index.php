<?php
require_once "./vendor/autoload.php";

print_r($_POST);

// Create the Transport
$transport = (new Swift_SmtpTransport('smtp.office365.com', 587))
  ->setUsername('felix-werner@hotmail.de')
  ->setPassword('')
;

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = (new Swift_Message('Wonderful Subject'))
  ->setFrom([$_POST["email"]])
  ->setTo(['felix.werner.dev@gmail.com'])
  ->setBody($_POST["description"])
  ;


// Send the message
$result = $mailer->send($message);