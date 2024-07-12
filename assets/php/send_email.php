<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "harshhhh1803@gmail.com";
    $subject = "New message from $fullname";
    $body = "Email: $email\n\n$message";

    if (mail($to, $subject, $body)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
}
?>