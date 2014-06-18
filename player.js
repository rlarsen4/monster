$(function() {   

    var Player = function(selectedPlayer){
        
        this.name = [characterList[1][selectedPlayer].name],
        this.bio = [characterList[1][selectedPlayer].bio],
        this.weapon = [characterList[1][selectedPlayer].weapon],
        this.health = [characterList[1][selectedPlayer].health],
        this.score = [characterList[1][selectedPlayer].score]
        
        console.log(this.name);
        console.log (this.health);
        console.log(this.score);
        console.log(aMonster);


        // methods
        d12 = new Dice(12);
        d2 = new Dice(2);

        //Player decides to attack
        this.attack = function () {
            
            var enemyStrength = aMap.aMonster;
            console.log(enemyStrength);
            
            var newAttack = d12.roll();
            if (newAttack === 0) {
                newAttack += 1;
                // $('gamePlay').text ("The" + aMonster.name + "has a strength of :" aMonster.level + "your attack was a :" + newAttack);
                console.log(newAttack);
            }
            console.log("Your roll: " + newAttack);
            
            if (newAttack >= enemyStrength) {
                aPlayer.score = parseInt(aPlayer.score) + 100;
                console.log("you win. Your Score: " + aPlayer.score);
                $('attack').addClass('inactive');
                
            }
            else {
                var enemyAttack = d12.roll();
                if (enemyAttack) {
                console.log("you missed");
                console.log("Enemy's attack: " + enemyAttack);
                aPlayer.health -= enemyAttack;
                $('gamePlay').text("Your score: " + aPlayer.score + ". Your health: " + aPlayer.health);
                $('attack').addClass('inactive');
                if (aPlayer.health <= 0) {
                    aPlayer.health = 0;

                        console.log("Your Health: " + aPlayer.health);
                        alert("GAME OVER");
                    }
                }     
            }        
        };

        // Run Away was pushed

        this.runAway = function() {
            myRoll = d2.roll();
            if(myRoll === 0) {
                aMap.currLocation = aMap.prevLocation;
                console.log('rolled a zero');
            }
            else {
                aMap.currLocation = aMap.currLocation;
                console.log('rolled a one');

            }
            
        };
            
        // Player can pick up a potion
        this.pickup = function() {
            if(aWeapon){
                $('gamePlay').text("You have picked up the" + aWeapon.name);

            } else {
                this.health = this.health + 5;
                $('gamePlay').text("The potion you received increased your health");
            }
        
    
        };


    var aPlayer = new Player(1);
    return aPlayer;
    
    
    $('.attack').on("click", aPlayer.attack);
    $('.runAway').on("click", aPlayer.runAway);
    $('.pickUp').on("click", aPlayer.pickup);
     



});