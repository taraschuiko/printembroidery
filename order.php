<?php
  $baseURL = "http://new.printembroidery.com.ua";
  if(isset($_POST['submit'])){
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

    $message = '<h1>Нове замовлення від '.$name."!</h1><br>"
                .'Номер телефону: '.$tel."<br>"
                .'Коментар: '.$comment."<br>"
                .'Послуги: '.$services."<br>"
                .'Файли:';

    $fileExtensions = ['jpeg','jpg','png','gif','psd','ai','cdr',''];

      // Count total files
      $countfiles = count($_FILES['file']['name']);
      
      // Looping all files
      for($i=0; $i<$countfiles; $i++){
        $fileName = $_FILES['file']['name'][$i];
        $fileSize = $_FILES['file']['size'][$i];
        $fileTmpName  = $_FILES['file']['tmp_name'][$i];
        $fileType = $_FILES['file']['type'][$i];
        $fileExtension = strtolower(end(explode('.',$fileName)));

        if (in_array($fileExtension, $fileExtensions)) {
            if ($fileSize < 25000000) {
              $didUpload = move_uploaded_file($_FILES['file']['tmp_name'][$i],'uploads/'.$fileName);

              if ($didUpload) {
                  $message .= ' <a href="'.$baseURL.'/uploads/'.$fileName.'">'.$fileName.'</a>';
              } else {
                  // Направити на сторінку помилки
                  // header("Location:/order/fail.html");
                  // exit;
              }
            } else {
              // Направити на сторінку помилки
              header("Location:/order/fail.html?size=".$fileSize);
              exit;
            }
        } else {
          // Направити на сторінку помилки
          header("Location:/order/fail.html?extension=".$fileExtension);
          exit;
        }
      }
      if(!(mail("info@printembroidery.com.ua", "Нове замовлення!", $message, "Content-Type: text/html; charset=UTF-8"))) {
        header("Location:/order/fail.html");
        exit;
      }
      // Направити на сторінку успіху
      header("Location:/order/success.html");
      exit;
    }
?>