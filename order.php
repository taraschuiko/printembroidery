<?php
  // Get values
  $services = '';
  if(!empty($_POST['services'])) {    
      foreach($_POST['services'] as $value) {
        if($services == '') {
          $services = $value;
        } else {
          $services = $services.', '.$value;
        }
      }
  }
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $comment = $_POST['comment'];

  // Send email
  $message = '<h1>Нове замовлення від '.$name."!</h1><br>"
    .'Номер телефону: '.$tel."<br>"
    .'Коментар: '.$comment."<br>"
    .'Послуги: '.$services;

  echo $message;
  mail("info@printembroidery.com.ua", "Нове замовлення!", $message, "Content-Type: text/html; charset=UTF-8");
?>