var MapObject = function() {
    this.getLocation = function(controllerData){
        var currLocationId = "#" + controllerData.currLocation;
        var prevLocationId = "#" + controllerData.prevLocation;
        $(currLocationId).addClass('activeTile');
        $(currLocationId).removeClass('visitedTile');
        $(currLocationId).removeClass('goalTile');
        $(prevLocationId).addClass('visitedTile');

    }

    this.monsterOrWeapon = function () {
        var checkForMonsters = new Dice(5);
        if (checkForMonsters.roll() == 1) {
            aWeapon = new Weapon();
            console.log(aWeapon.selectAWeapon());
            $('.attack').text('Pick Up');
            $('.attack').addClass('pickUp');
            $('.attack').removeClass('attack');

        } else {
            aMonster = new Monster();
            aMonster.selectAMonster();
            console.log(aMonster.selectAMonster());
            aScoreboard.drawScoreboard();
            $('.pickUp').text('Attack');
            $('.pickUp').addClass('attack');
            $('.pickUp').removeClass('pickUp');
            return aMonster;
        }
    }
};

