var gameover = function() {
    $('.gameplay').addClass('inactive');
    $('.stats').addClass('inactive');
    $('.gameover').removeClass('inactive');
}
// getScore: function() {
//             $('.finalScore').text(aScoreboard.getScore());
//         },   

        // playAgain: function() {
        //     gamedata = {};
        //     $('.playerSelector').removeClass('inactive');
        //     $('.stats').removeClass('inactive');
        //     $('.gameplay').addClass('inactive');
        //     $('.gameover').addClass('inactive');           
        // }
    }
})(jQuery);

var aGameover = new App.GameOver;
