var Scoreboard = function(player) {
    // properties
    var plyr = characterList[1][player];
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
        $('.bio').text(this.bio);
        $('.weapon').text(this.weapon);
         $('.health').text(this.health);
        $('.score').text(this.score);
        // $('.weaponImage').attr('src', bowAndArrowThumbnail.png)
        $('.monsterImage').text(aMonster.currentMonster.name);
        $('.monsterName').text(aMonster.currentMonster.name);
        $('.monsterBio').text(aMonster.currentMonster.bio);
        $('.monsterLevel').text(aMonster.currentMonster.level);
        $('.monsterWeapon').text(aMonster.currentMonster.weapon);
    };

}

var aScoreboard = new Scoreboard(0);

aScoreboard.drawScoreboard();
