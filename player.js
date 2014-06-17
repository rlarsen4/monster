$(function() {   

    var Player = function(selectedPlayer){

        this.currentPlayer = {
        playerName: [characterList[1][selectedPlayer].name],
        playerBio: [characterList[1][selectedPlayer].bio],
        weapon: [characterList[1][selectedPlayer].weapon],
        health: [characterList[1][selectedPlayer].health],
        score: [characterList[1][selectedPlayer].score]
        }
    console.log (this.currentPlayer); 

    
    // methods
    d12 = new Dice(12);
    d2 = new Dice(2);

    //Player decides to attack
    this.playerAttack = function () {
        
        var enemyStrength = 7;
        console.log(enemyStrength);

        var newAttack = d12.roll();
            if (newAttack === 0) {
                newAttack += 1;
                // console.log(newAttack);
            }
        console.log("Your roll: " + newAttack);
        
        if (newAttack >= enemyStrength) {
            this.score += 100;
            console.log("you win.");
            
        }
        else {
            var enemyAttack = d12.roll();
            if (enemyAttack) {
            console.log("you missed");
            console.log("Enemy's attack: " + enemyAttack);
            aPlayer.health -= enemyAttack;
            console.log("your score: " + this.score + ". Your health: " + this.health);
            if (this.health === 0) {
                console.log("GAME OVER");
                }
            }     
        }        
    }

    // Run Away was pushed

    this.runAway = function() {
        myRoll = d2.roll();
        if(myRoll === 0) {
            // currLocation = prevLocation;
            console.log('rolled a zero');
        }
        else {
            // currLocation = currLocation;
            console.log('rolled a one');

        }
        
    }
        
    // Player can pick up a potion
    this.playerPickup = function() {
        if (aWeapon == [characterList[0][0]]) {
            $('.attack').
            this.health = this.health + 5;
        }
        
    }


    
    }

    var aPlayer = new Player(2);
    console.log (aPlayer.playerName);

    $('.attack').on("click", aPlayer.playerAttack);
    $('.runAway').on("click", aPlayer.runAway);
    $('.pickUp').on("click", aPlayer.playerPickup); 



});