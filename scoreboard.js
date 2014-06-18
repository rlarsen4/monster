var Scoreboard = function(player) {
    // properties
    var plyr = characterList[1][player];
    this.playerType = plyr.name;
    this.bio = plyr.bio;
    this.weapon = plyr.weapon;
    this.health = plyr.health;
    this.score = plyr.health;

    // methods
    this.drawScoreboard = function() {
        console.log(aPlayer);
        $('.playerType').text(aPlayer.playerType);
        $('.bio').text(this.bio);
        $('.weapon').text(this.weapon);
         $('.health').text(this.health);
        $('.score').text(this.score);
        // $('.weaponImage').attr('src', bowAndArrowThumbnail.png)
        $('.monsterImage').text(aMonster);
        $('.monsterName').text(aMonster.currentMonster.name);
        $('.monsterBio').text(aMonster.currentMonster.bio);
        $('.monsterLevel').text(aMonster.currentMonster.level);
        $('.monsterWeapon').text(aMonster.currentMonster.weapon);
    };

    this.hideRules = function() {
        $('.rules').addClass("inactive");
        $('.hiddenRules').removeClass("inactive");
    }

    this.showRules = function() {
        $('.hiddenRules').addClass("inactive");
        $('.rules').removeClass("inactive");
    }

}

var aScoreboard = new Scoreboard(1);

aScoreboard.drawScoreboard();
