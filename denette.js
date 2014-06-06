$(function() {

var choosePlayer = function(){
	// change background around the player that was chosen - css()
	$('.selected').removeClass('selected');
	$(this).parent().addClass('selected');
	$('.startButton').show();
};

var startGame = function(){
	// Link to and open the gameplay.php
	window.open('/gameplay.php');
	};


$('button.player').on("click", choosePlayer);

$('.playerChoices').on("click", '.startButton', startGame);


// $(document).ready(function(){

// 	$(".main ul li a img").mouseenter(function() {
// $(this).animate({height:600,width:600}, 200);
// $(this).css("z-index","999");
// });

// $(".main ul li a img").mouseout(function() {
// $(this).animate({height:200,width:200}, 200);
// $(this).css("z-index","1");
// });
// 	});

});