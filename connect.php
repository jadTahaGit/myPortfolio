<?php

$conn = mysqli_connect("localhost", "root","","db_jt");

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}
