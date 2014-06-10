var Monster = function() {
    //properties
    //methods

    this.selectAMonster = function() {
        this.howManyMonsters = characterList[2].length;
        var monsterDice = new Dice(this.howManyMonsters);
        this.currentMonster = characterList[2][monsterDice.getRoll()];  
    }
}

var aMonster = new Monster;

aMonster.selectAMonster();