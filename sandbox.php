<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>sandbox</title>
</head>
<body>
<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 'on');

    $mysqli = new mysqli("localhost", "root", "", "text_adventure");
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
?>
    
    <button id="turn">Try</button>
</body>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="simpleDB.js"></script>
</html>