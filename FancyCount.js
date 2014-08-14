(function() {
    "use strict";
    var logged = false;

    function FancyCount() {
        this.name = 'FancyCount';
        this.version = 'SNAPSHOT';

        this.count = function( element, from, to, time ) {
            time = time | 2500;
            var $e = element.indexOf( '#' ) == 0 ? document.getElementById( element.replace( '#', '' ) ) : document.getElementsByClassName( element.replace( '.', '' ) ),
                interval = 0;

            function tick() {
                if( count < to ) {
                    console.log( count );
                    $e.innerHTML = count;
                    count += to / timer;
                } else {
                    clearInterval( interval );
                    $e.innerHTML = to;
                }
            }

            if( from == 0 ) {
                var timer = time / to,
                    count = from;
                console.log( timer );

                interval = setInterval( tick, timer );

            } else {

            }
            console.log( arguments );
        };

        this.init();
    }

    FancyCount.prototype = {
        init: function() {
            if( !logged ) {
                logged = true;
                console.log( "This page is using " + this.name + "\r\nCopyright\u00a9 2014 - 2017 Markus Ahrweiler\r\nVersion: " + this.version );
            }
        }
    };

    window.FancyCount = FancyCount;
})();