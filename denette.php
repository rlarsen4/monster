<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
   	<script src="denette.js"></script>
   	<link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
	<header>
		<?php include "header.php";?>
	</header>
	<aside class="homePageAside">
		<div class="gameRulesAside">
			<h3>Quick Start Rules</h3>
			<ol>
				<li>Choose a player you want to be</li>
				<li>Click the Start button</li>
				<li>The Game board opens for you</li>
				<li>Use the Up/ Down/ Side arrows to move around the board</li>
				<li>Fight monsters, get rewards, get points and figure it out. That's all the information you get.</li>
			</ol>
		</div>

		<div class="bio">
			<h3>Bio</h3>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quidem?</div>
			<div>Weapon</div>
			<div>Strength</div>
		</div>
	</aside>
	
	<div class="playerChoices">
		<fieldset>
		<legend>Who Do You Want to Be</legend>

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
				<button class="player">Choose Elf</button>
			</div>
		</div>


		<div>
			<div class="playerImageBox">
				<button class="player">Choose Elf</button>
			</div>
			<div class="playerImageBox">
				<button class="player">Choose Elf</button>
			</div>
			<div class="playerImageBox">
				<button class="player">Choose Elf</button>
			</div>
		</div>

		<button class="startButton">Start the Game</button>

	</fieldset>
	</div>

	<!-- <button disabled="disabled" id="startButton">Start Game</button> -->
	
</body>
</html>