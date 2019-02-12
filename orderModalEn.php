<?php
  $baseURL = "https://printembroidery.com.ua";
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
    $name = $_POST['nameModal'];
    $tel = $_POST['telModal'];
    $comment = $_POST['commentModal'];

    $message = '<h1>Нове замовлення від '.$name."!</h1><br>"
                .'Номер телефону: '.$tel."<br>"
                .'Коментар: '.$comment."<br>"
                .'Послуги: '.$services."<br>"
                .'Мова: англійська<br>'
                .'Файли:';

    $fileExtensions = ['jpeg','jpg','png','gif','psd','ai','cdr',''];

      // Count total files
      $countfiles = count($_FILES['fileModal']['name']);
      
      // Looping all files
      for($i=0; $i<$countfiles; $i++){
        $fileName = $_FILES['fileModal']['name'][$i];
        $fileSize = $_FILES['fileModal']['size'][$i];
        $fileTmpName  = $_FILES['fileModal']['tmp_name'][$i];
        $fileType = $_FILES['fileModal']['type'][$i];
        $fileExtension = strtolower(end(explode('.',$fileName)));

        if (in_array($fileExtension, $fileExtensions)) {
            if ($fileSize < 25000000) {
              $didUpload = move_uploaded_file($_FILES['fileModal']['tmp_name'][$i],'uploads/'.$fileName);

              if ($didUpload) {
                  $message .= ' <a href="'.$baseURL.'/uploads/'.$fileName.'">'.$fileName.'</a>';
              } else {
                  // Направити на сторінку помилки
                  // header("Location:/order/fail.html");
                  // exit;
              }
            } else {
              // Направити на сторінку помилки
              header("Location:/en/order/fail.html?size=".$fileSize);
              exit;
            }
        } else {
          // Направити на сторінку помилки
          header("Location:/en/order/fail.html?extension=".$fileExtension);
          exit;
        }
      }
      if(!(mail("info@printembroidery.com.ua", "Нове замовлення!", $message, "Content-Type: text/html; charset=UTF-8"))) {
        header("Location:/en/order/fail.html");
        exit;
      }
      // Направити на сторінку успіху
      header("Location:/en/order/success.html");
      exit;
?>