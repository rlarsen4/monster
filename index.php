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
    
    <!--playerSelector visible first-->
    <div class="playerSelector"><?php include('playerSelector.php'); ?></div>
    
    <!-- load stats on the right -->
    <div class="stats"><?php include('stats.php'); ?> </div>
    
    <!-- container for map & gamedialog-->
    <div class="gameplay inactive"> 
        <!-- load the map on the left -->
        <div class="map"><?php include('map.php'); ?> </div>
        <!-- load dialog in the middle -->
        <div class="gamedialog"><?php include('gamedialog.php'); ?> </div>
    </div>

    <!-- gameover page-->
    <div class="gameover inactive"><?php include('gameover.php'); ?></div>


    <script src="jquery-1.11.1.min.js"></script>
    <script type="text/javascript"></script>
   	<script src="denette.js"></script>
    <script type="text/javascript" src="gameover.js"></script>
</body>
</html>



