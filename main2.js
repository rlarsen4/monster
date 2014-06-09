var Dice = function(sides) {
    var roll = Math.floor((Math.random() * sides) + 1);

    this.getRoll = function() {
        return roll;
    }
};

var MapObject = function() {
    var currLocation = 1;
    var prevLocation = 1;

    this.getLocation = currLocation;

    this.walkUp = function() {
        if (currLocation <= 5) {
            currLocation = currLocation;
        } else {
            prevLocation = currLocation;
            currLocation -= 5;
            $('#6').addClass('.activeTile')
            $('#6').css(background-color, "purple");
        }
    }

    this.walkDown = function() {
        if (currLocation >= 21) {
            currLocation = currLocation;
        } else {
            prevLocation = currLocation;
            currLocation += 5;
            $('').addClass('activeTile');
            
        }
    }
};

/*
(function(){

    var Monstor = function(settings){
        // override settings ....


        this.attack = function(enemy){

        }

        this.die = function(){

        };

    };

    var Player = function(settings){
        // override settings ....

        this.attack = function(enemy){

            // Perform random
            // if I win
            enemy.die();

            // if I lose
            this.lose();

        }

        this.lose = function(){
            this.settings.health = this.settings.health - 5;
        };

    };


    // Load our db
    var settings = db.fetch();
    // foreach(setting in settings)
    // if settings is monstor ...

    // create a monstor
    var monstor1 = new Monstor({
            name: "Vampire",
            bio: "I'm a vampire, I hate garlic.",
            level: 6,
            weapon: weaponType[0] 
        });

    // if setting is player
    var player = new Player({
        name: "Amazon",
        bio: "I'm a hero",
        weapon: weaponType[0],
        health: 100,
        score: 0
    });


})();

// when user says move left
    player.location = player.location - 1;
    // Check if monstor is here
    // foreach monstor in monstors
    // if monstor.location == player.location
        // alert user
        // make run/attack buttons visible

// When user clicks attack
    // find monster in player location
    // foreach monster is monsters
        // if m.location == player.locatoin
            // player.attack(m);
            //



*/
