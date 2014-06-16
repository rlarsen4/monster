var Dice = function(sides) {
    this.sides = sides;
    //var roll = Math.floor((Math.random() * sides));

    this.roll = function() {
         
        return Math.floor((Math.random() * this.sides));
        
    }
}

// $(function() {  


// d12 = new Dice(12);
// d2 = new Dice(2);

// //Player decides to attack
//     this.playerAttack = function () {
        
//         var enemyStrength = 7;
//         console.log(enemyStrength);

//         var newAttack = d12.roll();
//             if (newAttack === 0) {
//                 newAttack += 1;
//                 console.log(newAttack);
//             }
//         console.log("Your roll: " + newAttack);
        
//         if (newAttack >= enemyStrength) {
//             this.score += 100;
//             console.log("you win.");
//         }
//         else {
//             var enemyAttack = d12.roll();
//             if (enemyAttack) {
//             console.log("you missed");
//             console.log("Enemy's attack: " + enemyAttack);
//             this.health -= enemyAttack;
//             console.log("your score: " + this.score + ". Your health: " + this.health);
//             if (this.health === 0) {
//                 console.log("GAME OVER");
//                 }
//             }     
//         }        
//     }


//     this.test = function(){
        
//         myRoll = d12.roll();
//         if (myRoll !== 0){
//             console.log(myRoll);
//         } else {
//             console.log('you rolled a zero');
//         }

//     }

    // Run Away was pushed

    // this.runAway = function() {
    //     myRoll = d2.roll();
    //     if(myRoll === 0) {
    //         // currLocation = prevLocation;
    //         console.log('rolled a zero');
    //     }
    //     else {
    //         // currLocation = currLocation;
    //         console.log('rolled a one');

    //     }
        
    // };


//     $('.attack').on("click", this.playerAttack);
//     $('.test').on("click", this.test);
    // $('.runAway').on("click", this.runAway);















// });