$(function() {    

    var Player = function(){
        // Properties
        this.playerName = [CharacterList[1].name];
        this.playerBio = [CharacterList[1].bio];
        this.weapon = [characterList[1].weapon];
        this.health = [characterList[1].health];
        this.score = [characterList[1].score];        


        // methods


    this.playerTurn = function () {

        var playerAttack = new Dice(12);
            if (playerAttack.getRoll() === 0) {
                playerAttack += 1;
            }
        console.log("Your roll: " + playerAttack);
        playerAttack += weaponStrength;
        console.log("your attack: " + playerAttack);

        if (playerAttack >= enemyStrength) {
            playerScore += 100;
            console.log("you win.");
        }
        else {
            var enemyAttack = new Dice(12);
            if (enemyAttack.getRoll())
            console.log("you missed");
            console.log("Enemy's attack: " + enemyAttack);
            playerHealth -= enemyAttack;
            console.log("your score: " + playerScore + ". Your health: " + playerHealth);
            if (playerHealth === 0) {
                console.log("GAME OVER");
            }
        }     
    }

        

        playerRunAway

        this.runAway = function() {
            currLocation = prevLocation;
        }

        

        this.playerPickup = function() {
            this.health = this.health + 5;

        }







        $('.attack').on("click", playerTurn);
        $('.runAway').on("click", runAway);
        $('.pickUp').on("click", playerPickup);

}
    




});