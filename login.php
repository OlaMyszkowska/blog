<?php
$email = $_POST['email'];
$password = $_POST['password'];

$servername = "localhost"; 
$username = "nazwa_uzytkownika";
$password_db = "haslo_uzytkownika";
$dbname = "nazwa_bazy_danych";

$conn = new mysqli($servername, $username, $password_db, $dbname);

if ($conn->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}

$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows === 1) {
    header('Location: main.html');
    exit();
} else {
    echo 'Błędne dane logowania. Spróbuj ponownie.';
}

$conn->close();
?>
