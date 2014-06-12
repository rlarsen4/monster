$(function() {

var choosePlayer = function(){
	// change background around the player that was chosen - css()
	$('.selected').removeClass('selected');
	$(this).parent().addClass('selected');
	// Start button appears
	$('.startButton').show();
	// Clicked on player's bio appears in the Aside under the Directions
	// $('.bioAside').show();
	renderBio();
};

var startGame = function(){
	// Link to and open the gameplay.php
	window.open('gameplay.php');
	};


$('button.player').on("click", choosePlayer);

$('.playerChoices').on("click", '.startButton', startGame);



// var renderBio = function(){
//     var plyr = characterList[1];
//     this.playerType = plyr.name;
//     this.bio = plyr.bio;
//     this.weapon = plyr.weapon;

// 	// $('.bioName').remove(plyr.name);
// 	// $('.bioBio').remove(plyr.bio);
// 	// $('.bioWeapon').remove(plyr.weapon);

// 	$('.bioAside').show();
// 	$('.bioName').text(plyr.name);
// 	$('.bioBio').text(plyr.bio);
// 	$('.bioWeapon').text(plyr.weapon);

// }









});