var Scoreboard = function() {
    // properties
    var plyr = characterList[1];
    var oppt = characterList[2];
    this.playerType = plyr.name;
    this.bio = plyr.bio;
    this.weapon = plyr.weapon;
    this.health = plyr.health;
    this.score = plyr.health;
    this.monsterName = aMonster.currentMonster.name;
    this.monsterBio = aMonster.currentMonster.bio;
    this.monsterLevel = aMonster.currentMonster.level;
    this.monsterWeapon = aMonster.currentMonster.weapon;

    // methods
    this.drawScoreboard = function() {
        $('.playerType').text(this.playerType);
        $('.bio').text(this.playerType);
        $('.weapon').text(this.weapon);
        $('.health').text(this.health);
        $('.score').text(this.score);
        $('.monsterName').text(this.monsterName);
        $('.monsterBio').text(this.monsterBio);
        $('.monsterLevel').text(this.monsterLevel);
        $('.monsterWeapon').text(this.monsterWeapon);
    };

}

var aScoreboard = new Scoreboard;

aScoreboard.drawScoreboard();
