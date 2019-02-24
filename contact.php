<?php

if (isset($_POST['Submit'])) {

  // Variables
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $phone = $_POST['phone'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "contact@tarald.tech";
  $headers = "New Form Contact From: ".$mailFrom;
  $txt = "You have recieved an e-mail from ".$firstName.$lastName.".\n\n".$message;

  mail($mailTo, $message, $txt, $headers);
  header("Location: index.html?mailsend");
}