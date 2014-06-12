$(function() {    

    var Player = function(selectedPlayer){
        // Properties
        this.playerName = [characterList[1][selectedPlayer].name];
        this.playerBio = [characterList[1][selectedPlayer].bio];
        this.weapon = [characterList[1][selectedPlayer].weapon];
        this.health = [characterList[1][selectedPlayer].health];
        this.score = [characterList[1][selectedPlayer].score];



    // methods


    this.playerAttack = function () {
        
        var enemyStrength = [characterList[2].level];

        var newAttack = new Dice(12);
            if (newAttack.getRoll() === 0) {
                newAttack += 1;
            }
        console.log("Your roll: " + newAttack);
        // newAttack += weaponStrength;
        // console.log("your attack: " + newAttack);

        if (newAttack >= enemyStrength) {
            this.score += 100;
            console.log("you win.");
        }
        else {
            var enemyAttack = new Dice(12);
            if (enemyAttack.getRoll()) {
            console.log("you missed");
            console.log("Enemy's attack: " + enemyAttack);
            this.health -= enemyAttack;
            console.log("your score: " + this.score + ". Your health: " + this.health);
            if (this.health === 0) {
                console.log("GAME OVER");
            }
        }     
    }        

        // Run Away was pushed
        this.runAway = function() {
            currLocation = prevLocation;
        }
        
        // Player can pick up a potion
        this.pickupHealth = function() {
            if (aWeapon == [characterList[0][0]]) {
                this.health = this.health + 5;
            }
            
        }

    }
}

var aPlayer = new Player(0);
console.log (aPlayer.playerName);


        $('.attack').on("click", aPlayer.playerAttack);
        $('.runAway').on("click", this.runAway);
        $('.pickUp').on("click", this.playerPickup);


    




});