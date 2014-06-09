$(function() {

var monsterOrPotion = function () {
    var checkForMonsters = new Dice(5);
    if (checkForMonsters.getRoll() == 1) {
        aPotion = new Potion();
        $('.gamePlay').text("");
        $('.gamePlay').text("Yummy potion");
    } else {
        aMonster = new Monster();
        $('.gamePlay').text("");
        $('.gamePlay').text("Scary monster");
    }
}

var mapWalk = new MapObject;


mapWalk.getLocation();
$('.up').on('click', mapWalk.walkUp);
$('.up').on('click', mapWalk.getLocation);
$('.up').on('click', monsterOrPotion);
$('.down').on('click', mapWalk.walkDown);
$('.down').on('click', mapWalk.getLocation);
$('.down').on('click', monsterOrPotion);
$('.left').on('click', mapWalk.walkLeft);
$('.left').on('click', mapWalk.getLocation);
$('.left').on('click', monsterOrPotion);
$('.right').on('click', mapWalk.walkRight);
$('.right').on('click', mapWalk.getLocation);
$('.right').on('click', monsterOrPotion);
$('.runAway').on('click', mapWalk.runAway);
$('.runAway').on('click', mapWalk.getLocation);
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
