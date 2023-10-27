
<?php

$name=$_POST["nom"];
$email=$_POST["email"];
$telephone=$_POST["telephone"];
$message=$_POST["message"];




require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;




    $mail = new PHPMailer(true);

    // Enable debugging (for development purposes)
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;

    // Set mailer to use SMTP
    $mail->isSMTP();
    $mail->SMTPAuth = true;

    // SMTP server settings
    $mail->Host = "smtp.example.com"; // Remplacez par le nom de votre serveur SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Utilisez PHPMailer::ENCRYPTION_SMTPS pour SSL
    $mail->Port = 587; // Utilisez 465 pour SSL

    // SMTP authentication
    $mail->Username = "jeansylvestresirime@gmail.com"; // Remplacez par votre adresse e-mail
    $mail->Password = "Motdepasse2023"; // Remplacez par le mot de passe de votre adresse e-mail

    // Expéditeur et destinataire
    $mail->setFrom($email, "$name");
    $mail->addAddress("recipient@example.com", "Nom du destinataire");

    // Contenu de l'e-mail
    $mail->Subject = "$telephone";
    $mail->Body = "$messsage";

    // Envoyer l'e-mail
    $mail->send();
    echo "L'e-mail a été envoyé avec succès";

?>
