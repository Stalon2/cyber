<?php
$servername = "localhost";
$username = "root";
$password = "";

try {
  
  $conn = new PDO("mysql:host=$servername;dbname=cybe_db", $username, $password);
  // Définit le mode d'erreur PDO sur exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connecté avec succès";
} catch (PDOException $e) {
  echo "Échec de la connexion : " . $e->getMessage();
}
?>
