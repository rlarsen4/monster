var MapObject = function() {
    this.aMonster;

    this.getLocation = function(controllerData){
        var currLocationId = "#" + controllerData.currLocation;
        var prevLocationId = "#" + controllerData.prevLocation;
        $(prevLocationId).addClass('visitedTile');
        $(currLocationId).removeClass('visitedTile');
        $(currLocationId).removeClass('goalTile');
        $(currLocationId).addClass('activeTile');

    };

    this.monsterOrWeapon = function () {
        var checkForMonsters = new Dice(5);
        if (checkForMonsters.roll() == 1) {
            this.aWeapon = new Weapon();
            this.aWeapon = aWeapon.selectAWeapon();
            $('.gamePlay').text("You found one " + aWeapon + ". ");
            $('.attack').text('Pick Up');
            $('.attack').addClass('pickUp');
            $('.pickUp').removeClass('inactive');
            $('.attack').removeClass('attack');

        } else {
            this.aMonster = new Monster();
            this.aMonster = aMonster.selectsAMonster();
            $('.gamePlay').text("You encountered the " + aMonster.name + ". ");
            $('.pickUp').text('Attack');
            $('.pickUp').addClass('attack');
            $('.pickUp').removeClass('inactive');
            $('.pickUp').removeClass('pickUp');
            return aMonster;
        }
    };
};

