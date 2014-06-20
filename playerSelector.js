$(function() {

/* Populates Home Page with Players*/
    var makeHomePage = function(){
        var listPlayers = characterList[1];
        var howManyHeroes = listPlayers.length;

        for (i = 0; i < howManyHeroes; i++) {
            $('.playerSelectorFieldset').append("<div class='playerSelectorButton' id='"
                + i
                + "'>"
                + "<img src='image/"
                + listPlayers[i].image
                + "'><br>"
                + listPlayers[i].name
                + "<br></div>");
            }
            $('.playerSelectorFieldset').append("<div class='startGameButton'>Start Game</div>");
    };

/*Choose Player, Show Start Button*/
    var choosePlayer = function(){
        // change background around the player that was chosen 
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        $('.playerStats').removeClass('inactive');

        // Start button appears
        $('.startGameButton').show();

        var chosenPlayerId = this.id;
        console.log(chosenPlayerId);

        aPlayer = new Player(chosenPlayerId);
        console.log(aPlayer.name);
        aScoreboard = new Scoreboard;

        // Attach Events
        // 
        $('.attack').on("click", aPlayer.attack);
        $('.runAway').on("click", aPlayer.runAway);
        $('.pickUp').on("click", aPlayer.pickup);

        console.log('You chose: '+ chosenPlayerId);
    };

/*Button click to start game*/
    var startGame = function(){
        $('.playerSelector').addClass('inactive');
        $('.gameplay').removeClass('inactive');
        console.log('something was clicked');
    };


// Event Handlers

    makeHomePage();

    $('.playerSelectorFieldset').on('click', '.startGameButton', startGame);

    $('.playerSelectorFieldset').on('click', '.playerSelectorButton', choosePlayer);


    





















});