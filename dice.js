var Dice = function(sides) {
    var roll = Math.floor((Math.random() * sides));

    this.getRoll = function() {
        return roll;
    }
};