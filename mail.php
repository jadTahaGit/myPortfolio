<?php

$message_sent = false;
if (isset($_POST['name']) && $_POST['name'] != '') {
    if (filter_var($_POST['name'], FILTER_VALIDATE_EMAIL)) {

        // Submit the form
        $name = $_POST['name'];
        $company = $_POST['company'];
        $email = $_POST['email'];
        $from_where = $_POST['from-where'];
        $message = $_POST['message'];
        $submit = $_POST['btn-form'];

        $to = "jadtaha.de@gmail.com";
        $body = '';

        $body .= "From: " . $name . "\r\n";
        $body .= "Email: " . $email . "\r\n";
        $body .= "Message: " . $message . "\r\n";

        // mail($to, $company, $body);

        $message_sent = true;
    } else {
        $invaild_class_name = 'form-invailed';
    }
}
