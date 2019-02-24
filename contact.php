<?php
  // Message Vars
  $msg = '';

  // Check for submit
  if(filter_has_var(INPUT_POST, 'submit')){
    // Get Form Data
    $firstName = $POST_['firstName'];
    $lastName = $POST_['lastName'];
    $phone = $POST_['phone'];
    $mail = $POST_['mail'];
    $message = $POST_['message'];
    echo 'WORKS';

    // Check Required Fields
    if(!empty($email) && !empty($firstName) && !empty($lastName) && !empty($message)) {
      // Passed
      echo = 'Passed';
    } else {
      // Failed
      $msg = 'Please fill in all fields';
    }
  }

?>