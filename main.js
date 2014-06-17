$(function() {

var aController = new Controller;
var aMap = new MapObject;  
var aWeapon = new Weapon;
var aGame = new Game;

aWeapon.getWeapon(1);

var moveUp = function() {
    aController.walkUp();
    aMap.getLocation(aController);
}

var moveDown = function () {
    aController.walkDown();
    aMap.getLocation(aController);
}

var moveLeft = function () {
    aController.walkLeft();
    aMap.getLocation(aController);
}

var moveRight = function () {
    aController.walkRight();
    aMap.getLocation(aController);
}

var keyGotPusheded = function  (e) {
    if (e.keyCode == 37) {
        moveLeft();
        return false;
    } else if (e.keyCode == 39) {
        moveRight();
        return false;
    } else if (e.keyCode == 38) {
        moveUp();
        return false;
    } else if (e.keyCode == 40) {
        moveDown();
        return false;
    }
    // body...
}

//event listeners
// aController.getLocation();
$('.up').on('click', moveUp);
$('.down').on('click',moveDown) ;
$('.left').on('click', moveLeft);
$('.right').on('click', moveRight);
// $('.runAway').on('click', aController.runAway);
// $('.runAway').on('click', aController.getLocation);
$('.replay').on('click', aGame.playAgain );
$(document).keydown(keyGotPusheded);

});
