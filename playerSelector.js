$(function() {

    var makeHomePage = function(){
        var listPlayers = characterList[1];
        var howManyHeroes = listPlayers.length;

        for (i = 0; i < howManyHeroes; i++) {
            $('.playerSelectorFieldset').append("<div class='playerSelectorButton'>" 
                + "<img src='image/"
                + listPlayers[i].image
                + "'><br>"
                + listPlayers[i].name
                + "<br>" 
                + listPlayers[i].bio
                + "<br>" 
                + listPlayers[i].weapon)
                + '</div>';
            }
        $('.playerSelectorFieldset').append("<div class='startGameButton'>Start Game?</div>");
    }





    var choosePlayer = function(){
        // change background around the player that was chosen - css()
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        // Start button appears
        $('.startGameButton').show();
        // Clicked on player's bio appears in the Aside under the Directions
        // $('.bioAside').show();
        renderBio();
    };

    var startGame = function(){
        // Link to and open the gameplay.php
        window.open('gameplay.php');
        };


    // Event Handlers

    makeHomePage();

    $('.playerSelectorButton').on("click", choosePlayer);

    $('.playerChoices').on("click", '.startButton', startGame);























});