;var App = App || {};
(function($) {

    App.Controller = function(){
        //
        // ASK BRAD ABOUT DANIEL'S HACK HERE!!!
        //
        return {
        walkUp: function(){
        
            if (currLocation <= 5) {
                currLocation = currLocation;
            } else {
                prevLocation = currLocation;
                currLocation -= 5;
            }        
        },

        walkDown: function() {
            if (currLocation >= 21) {
                currLocation = currLocation;
            } else {
                prevLocation = currLocation;
                currLocation += 5;
            }
        },

        walkLeft: function() {
            if (currLocation == 1) {
                currLocation = currLocation;
            } else if (currLocation == 6) {
                currLocation = currLocation;
            } else if (currLocation == 11) {
                currLocation = currLocation;
            } else if (currLocation == 16) {
                currLocation = currLocation;
            } else if (currLocation == 21) {
                currLocation = currLocation;
            } else {
                prevLocation = currLocation;
                currLocation -= 1;
            }
        },

        walkRight: function() {
            if (currLocation == 5){
                currLocation = currLocation;
            } else if (currLocation == 10) {
                currLocation = currLocation;
            } else if (currLocation == 15) {
                currLocation = currLocation;
            } else if (currLocation == 20) {
                currLocation = currLocation;
            } else if (currLocation == 25) {
                currLocation = currLocation;
            } else {
                prevLocation = currLocation;
                currLocation += 1;
            }
        },

        runAway: function() {
            currLocation = prevLocation;
        },

        buttonClick: function () {
            // console.log("button got pushed");
            this.addClass('clicked');
        }
    }
}
})(jQuery);
var aApp = new App.Controller;