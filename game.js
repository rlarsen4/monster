var Game = function  () {
    
    this.takeTurn = function() {
        $('.gamePlay').text("You discovered one of those ");
        $('.gamePlay').append(aMonster.currentMonster.name + "s.");
    }
}