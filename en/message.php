<?php
  // Get values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['message'];

    $message = '<h1>Нове повідомлення від '.$name."!</h1><br>"
                .'Email: '.$email."<br>"
                .'Мова: англійська<br>'
                .'Повідомлення: '.$text;
                
      if(!(mail("info@printembroidery.com.ua", "Нове повідомлення!", $message, "Content-Type: text/html; charset=UTF-8"))) {
        header("Location:/message/fail.html");
        exit;
      }
      // Направити на сторінку успіху
      header("Location:/message/success.html");
      exit;
?>