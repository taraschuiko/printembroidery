<?php
  if(isset($_POST['submit'])){
  // Get values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['message'];

    $message = '<h1>Нове повідомлення від '.$name."!</h1><br>"
                .'Email: '.$email."<br>"
                .'Повідомлення: '.$text;

      mail("info@printembroidery.com.ua", "Нове повідомлення!", $message, "Content-Type: text/html; charset=UTF-8");
      // Направити на сторінку успіху
      header("Location:/message/success.html");
      exit;
    }
?>