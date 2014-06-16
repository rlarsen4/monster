; var App = App || {};
(function($){
    App.GameOver = {
        getScore: function() {
            $('.finalScore').text(aScoreboard.getScore());
        },   

        playAgain: function() {
            gamedata = {};
            $('.playerSelector').removeClass('inactive');
            $('.stats').removeClass('inactive');
            $('.gameplay').addClass('inactive');
            $('.gameover').addClass('inactive');           
        }
    }
})(jQuery);

var aGameover = new App.GameOver;
