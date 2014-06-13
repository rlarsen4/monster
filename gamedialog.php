<?php ?>

<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="keithStyles.css">
    <link href='http://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>

</head>
<body>

    <div class="main">
        <div class="dialog">
            <div class="monsterContainer">
                <div class="monsterImg">
                    <img src="image/elf.png" id="elf">
                    
                </div>
                <div class="monsterDesc"><h1>
                Elf</h1>


                </div>
            </div>
            <div class="weaponContainer">
                <div class="weaponImg">
                    <img src="image/bowAndArrow.png" id="sword">
                    
                </div>
                <div class="weaponName"><h2>
                Monster Weapon</h2>


                </div>
                
            </div>
            
        </div>
        <div class="gamePlay">
            
        </div>
        <div class="scenery">
            
        </div>
        <div class="controlBlock"><?php include "controller.php";?>
        </div>

    </div>

<script type="text/javascript" src="simpleDB.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="map.js"></script>
<script type="text/javascript" src="dice.js"></script>
<script type="text/javascript" src="main.js"></script>
<script type="text/javascript" src="game.js"></script>
<script type="text/javascript" src="weapon.js"></script>
<script type="text/javascript" src="player.js"></script>
<script type="text/javascript" src="monster.js"></script>
<script type="text/javascript" src="scoreboard.js"></script>

</body>
</html>
































