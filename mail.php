<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';

    $name     = $_POST['user_name'];
    $question = $_POST['user_question'];
    $email    = $_POST['user_email'];

    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'artem.dirensky@gmail.com';
    $mail->Password   = 'WartemgmailkN1ght';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom('artem.dirensky@gmail.com');
    $mail->addAddress('korenevaandartem@gmail.com');

    $mail->Subject = 'Вопрос от клиента';

    $mail->Body = $name . ' оставил вопрос: ' . $question . ' Контактная почта: ' . $email;


    if(!$mail->send()) {
        header('location: hui.html');
    } else {
        header('location: index.html');
    }
?>