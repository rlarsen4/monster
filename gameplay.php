<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MonsterFighter</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link href='http://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>
</head>
<body>
    <!-- content at top - put header here-->
    <header> <?php include('header.php'); ?></header>
    <div class="playerSelector inactive"><?php include 'denette.php'; ?></div>
    <div> 
        <!-- load the map on the left -->
        <div class="map"><?php include 'map.php'; ?> </div>
        <!-- load stats on the right -->
        <div class="scoreboard"><?php include 'scoreboard.php'; ?> </div>
        <!-- load dialog in the middle -->
        <div class="gamedialog"><?php include 'gamedialog.php'; ?> </div>
    </div>
    <div class="gameover inactive"><?php include 'gameover.php'; ?></div>
	<script src="jquery-1.11.1.min.js"></script>
   	<script src="denette.js"></script>
    <script type="text/javascript" src="controller.js"></script>
     <script type="text/javascript" src="dice.js"></script>
</body>
</html>



