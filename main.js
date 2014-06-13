$(function() {

var aMap = new MapObject;
console.log(aMap);
var aController = new App;
console.log(aController);
var aWeapon = new Weapon;

aWeapon.getWeapon(1);
var moveUp = function() {
    aController.walkUp();
    aController.getLocation();
    aController.monsterOrWeapon();
    aGame = new Game;
    aGame.takeTurn();
}

var moveDown = function () {
    aController.walkDown();
    aController.getLocation();
    aController.monsterOrWeapon();
    console.log(aController.monsterOrWeapon());
    aGame = new Game;
    aGame.takeTurn();
}

var moveLeft = function () {
    aController.walkLeft();
    aController.getLocation();
    aController.monsterOrWeapon();
    aGame = new Game;
    aGame.takeTurn();
}

var moveRight = function () {
    aController.walkRight();
    aController.getLocation();
    aController.monsterOrWeapon();
    aGame = new Game;
    aGame.takeTurn();
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
aController.getLocation();
$('.up').on('click', moveUp);
$('.down').on('click',moveDown) ;
$('.left').on('click', moveLeft);
$('.right').on('click', moveRight);
$('.runAway').on('click', aController.runAway);
$('.runAway').on('click', aController.getLocation);
$(document).keydown(keyGotPusheded);



// var playerScore = 0;
// var playerHealth = 100;
// var enemyStrength = 7;
// var weaponStrength = 1;

// var playerWalk = function() {
//     console.log("You took 5 steps. You meet a monster");
//     enemyStrength = Math.floor((Math.random() * 10 ));
//     console.log("This monster is " + enemyStrength + " strong.");
//     playerTurn();
// }

// var chooseMonsters = function() {
//     var howManyMonsters = characterList[2].length;
//     var currentMonster = characterList[2][Math.floor((Math.random() * howManyMonsters ))];
// };

// var playerTurn = function () {
//     var playerAttack = Math.floor((Math.random() * 12));
//         if (playerAttack === 0) {
//             playerAttack += 1;
//         }
//     console.log("Your roll: " + playerAttack);
//     playerAttack += weaponStrength;
//     console.log("your attack: " + playerAttack);

//     if (playerAttack >= enemyStrength) {
//         playerScore += 100;
//         console.log("you win.");
//     }
//     else {
//         var enemyAttack = Math.floor((Math.random() * 12));
//         console.log("you missed");
//         console.log("Enemy's attack: " + enemyAttack);
//         playerHealth -= enemyAttack;
//         console.log("your score: " + playerScore + ". Your health: " + playerHealth);
//         if (playerHealth === 0) {
//             console.log("GAME OVER");
//         }
//     }     
// }

// // Start Run Away function GA
// var plyrCurLoc = 2;
// var plyrPrevLoc = 1;

// var runAway = function() {
//     console.log('You pressed Run Away');
//     plyrCurLoc = plyrPrevLoc; // new player location
//     console.log('New player location', plyrCurLoc);
// }

// $('#runaway').on("click", runAway);

// $('#turn').on("click", playerWalk);


// // pickup Item (weapon, other type item) GA

// var plyrItemHeld = characterList[1].weapon;
// var itemToPU = characterList[0][1];

// var puItem = function() {
//     console.log(plyrItemHeld + itemToPU);

//     if (plyrItemHeld !== itemToPU) {
//       plyrItemHeld = itemToPU;
//       console.log(plyrItemHeld);

//     }  
// }

// puItem();

});
