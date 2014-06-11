<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
   	<script src="denette.js"></script>
   	<script src="simpleDB.js"></script>
   	<link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
	<header>
		<?php include "header.php";?>
	</header>
	
	<aside class="homePageAside">
			<div class="gameRulesAside">
				<fieldset>
					<legend>Quick Start Rules</legend>
						<ol>
							<li>Choose a player you want to be</li>
							<li>Click the Start button</li>
							<li>The Game board opens for you</li>
							<li>Use the Up/ Down/ Side arrows to move around the board</li>
							<li>Fight monsters, get rewards, get points and figure it out. That's all the information you get.</li>
						</ol>
				</fieldset>
			</div>

			<div class="bioAside">
				<fieldset>
					<legend>Player Bio</legend>
						<div>Name: <span class="bioName"></span></div>
						<div>Bio: <span class="bioBio"></span></div>
						<div>Weapon: <span class="bioWeapon"></span></div>
						<div>Strength: <span class="bioStrength"></span></div>
				</fieldset>
			</div>
	</aside>

	<div class="playerChoices">
		<fieldset>
			<legend>Pick Your Player</legend>

			<div>
				<div id="amazon" class="playerImageBox">
					<img src="barbarian-152853_150.png" alt="">
					<button class="player">Choose Amazon</button>
				</div>

				<div id="elf" class="playerImageBox">
					<img src="archer-160389_150.png" alt="">
					<button class="player">Choose Elf</button>
				</div>

				<div class="playerImageBox">
					<img src="barbarian-152853_150.png" alt="">
					<button class="player">Choose Human</button>
				</div>
			</div>

			<div>
				<div class="playerImageBox">
					<img src="barbarian-152853_150.png" alt="">
					<button class="player">Choose Elf</button>
				</div>
				<div class="playerImageBox">
					<img src="barbarian-152853_150.png" alt="">
					<button class="player">Choose Elf</button>
				</div>
				<div class="playerImageBox">
					<img src="barbarian-152853_150.png" alt="">
					<button class="player">Choose Elf</button>
				</div>
			</div>

			<button class="startButton">Start the Game</button>

		</fieldset>
	</div>
	
</body>
</html>