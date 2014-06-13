<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>MonsterFighter</title>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
   	<script src="denette.js"></script>
   	<link rel="stylesheet" type="text/css" href="styles.css">
    <link href='http://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>
</head>
<body>
    <!-- content at top - put header here-->
    <header> <?php include 'header.php'; ?></header>
    <!-- <div class="playerSelector"><?php// include 'denette.php'; ?></div> -->
    <div> 
        <!-- load the map on the left -->
        <div class="map"><?php include 'map.php'; ?> </div>
        <!-- load stats on the right -->
        <div class="stats"><?php include 'stats.php'; ?> </div>
        <!-- load dialog in the middle -->
        <div class="gamedialog"><?php include 'gamedialog.php'; ?> </div>
    </div>
    <!-- <div class="gameover"><?php// include 'gameover.php'; ?></div> -->
</body>
</html>



