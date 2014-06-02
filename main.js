$(function() {

var playerScore = 0;
var playerHealth = 100;
var enemyStrength = 7;
var weaponStrength = 1;

var playerWalk = function() {
    console.log("You took 5 steps. You meet a monster");
    enemyStrength = Math.floor((Math.random() * 10 ));
    console.log("This monster is " + enemyStrength + " strong.");
    playerTurn();
}

var playerTurn = function () {
    var playerAttack = Math.floor((Math.random() * 12));
    console.log("Your roll: " + playerAttack);
    playerAttack += weaponStrength;
    console.log("your attack: " + playerAttack);

    if (playerAttack >= enemyStrength) {
        playerScore += 100;
        console.log("you win.");
    } else {
        var enemyAttack = Math.floor((Math.random() * 12));
        console.log("you missed");
        console.log("Enemy's attack: " + enemyAttack);
        playerHealth -= enemyAttack;
    } 
        console.log("your score: " + playerScore + ". Your health: " + playerHealth);
}

$('#turn').on("click", playerWalk);

});
