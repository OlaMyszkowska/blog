<?php
$servername = "localhost";
$username = "nazwa_uzytkownika";
$password = "haslo";
$dbname = "nazwa_bazy_danych";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($query) === TRUE) {
    echo "Użytkownik został pomyślnie utworzony.";
} else {
    echo "Wystąpił błąd podczas tworzenia użytkownika: " . $conn->error;
}

$conn->close();
?>
