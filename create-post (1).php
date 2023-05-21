<?php
session_start();
if (isset($_SESSION['email'])) {
    // Kod do tworzenia posta
    echo 'Tworzenie posta...';
} else {
    echo 'Nie jesteś zalogowany. Nie masz uprawnień do tworzenia postów.';
}
?>
