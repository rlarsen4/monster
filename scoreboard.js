var Scoreboard = function(player) {
    // properties

    // methods
    this.drawScoreboard = function() {
        console.log(aPlayer); 
        $('.playerType').text(aPlayer.name);
        $('.bio').text(aPlayer.bio);
        $('.weapon').text(aPlayer.weapon);
        $('.health').text(aPlayer.health);
        $('.score').text(aPlayer.score);
        // $('.weaponImage').attr('src', bowAndArrowThumbnail.png)
        // $('.monsterImage').append(aMonster);
            // $('.monsterName').text(aMonster.currentMonster.name);
            // $('.monsterBio').text(aMonster.currentMonster.bio);
            // $('.monsterLevel').text(aMonster.currentMonster.level);
            // $('.monsterWeapon').text(aMonster.currentMonster.weapon);
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
