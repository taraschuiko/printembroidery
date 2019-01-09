<?php
  $currentDir = getcwd();
  $uploadDirectory = "/uploads/";

  $errors = []; // Store all foreseen and unforseen errors here

  $fileExtensions = ['jpeg','jpg','png','gif','psd','ai','cdr']; // Get all the file extensions

  // Get values
    $services = '';
    if(!empty($_POST['services'])) {    
        foreach($_POST['services'] as $value) {
          if($services == '') {
            $services = $value;
          } else {
            $services .= ', '.$value;
          }
        }
    }
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $comment = $_POST['comment'];

  $fileName = $_FILES['file']['name'];
  $fileSize = $_FILES['file']['size'];
  $fileTmpName  = $_FILES['file']['tmp_name'];
  $fileType = $_FILES['file']['type'];
  $fileExtension = strtolower(end(explode('.',$fileName)));

  $uploadPath = $currentDir . $uploadDirectory . basename($fileName); 

  if(isset($_POST['submit'])) {
    // File check
    if (! in_array($fileExtension,$fileExtensions)) {
            $errors[] = "Файл повинен бути у форматі .png, .jpg, .gif, .psd, .ai або .cdr";
        }

        if ($fileSize > 5000000) {
            $errors[] = "Розмір Вашого файлу більший, ніж 5МБ. Завантажте, будь ласка, менший файл.";
        }

        if (empty($errors)) {
            $didUpload = move_uploaded_file($fileTmpName, $uploadPath);

            if ($didUpload) {
                // Send email
                $message = '<h1>Нове замовлення від '.$name."!</h1><br>"
                .'Номер телефону: '.$tel."<br>"
                .'Коментар: '.$comment."<br>"
                .'Послуги: '.$services."<br>"
                .'Файл: <a href="http://new.printembroidery.com.ua/uploads/'.$fileName.'">'.$fileName.'</a>';

                mail("info@printembroidery.com.ua", "Нове замовлення!", $message, "Content-Type: text/html; charset=UTF-8");
                header("Location:/order-success/");
            } else {
                echo "Десь помилка, напиши нам про це.";
            }
        } else {
            foreach ($errors as $error) {
                echo $error . "\n";
            }
        }
  }
?>