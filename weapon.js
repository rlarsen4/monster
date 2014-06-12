var Weapon = function(weap) {

    this.selectAWeapon = function() {
        this.howManyWeapons = characterList[0].length;
        var weaponDice = new Dice(this.howManyWeapons);
        this.currentWeapon = characterList[0][weaponDice.getRoll()];
    }

    this.getWeapon = function() {
        console.log(this.currentWeapon);
    }
}