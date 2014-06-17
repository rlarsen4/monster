$(function() {

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
        + listPlayers[i].weapon);
    }
$('.playerSelectorFieldset').append("<div class='startGameButton'>Start Game?</div>");


























});