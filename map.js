var MapObject = function() {
    var currLocation = 1;
    var prevLocation = 1;

    this.getLocation = function(){
        var currLocationId = "#" + currLocation;
        var prevLocationId = "#" + prevLocation;
        $(currLocationId).addClass('activeTile');
        $(currLocationId).removeClass('visitedTile');
        $(currLocationId).removeClass('goalTile');
        $(prevLocationId).addClass('visitedTile');
    }

    this.monsterOrWeapon = function () {
        var checkForMonsters = new Dice(5);
        if (checkForMonsters.getRoll() == 1) {
            aWeapon = new Weapon();
            currentMonster = [];
            $('.attack').text('Pick Up');
            $('.attack').addClass('pickUp');
            $('.attack').removeClass('attack');

        } else {
            aMonster = new Monster();
            aMonster.selectAMonster();
            aScoreboard.drawScoreboard();
            $('.pickUp').text('Attack');
            $('.pickUp').addClass('attack');
            $('.pickUp').removeClass('pickUp');
        }
    }
};

var Potion = function() {
    var name = "Blueberry flavored";
}

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
