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
function count( element, options ) {
    // merge the default plugin settings with the custom options
    options = $.extend( {}, count.defaults, options || {} );

    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil( options.speed / options.refreshInterval ),
        increment = (options.to - options.from) / loops;

    return $( element ).each( function() {
        var _this = this,
            loopCount = 0,
            value = options.from,
            interval = setInterval( updateTimer, options.refreshInterval );

        function updateTimer() {
            value += increment;
            loopCount++;
            $( _this ).html( value.toFixed( options.decimals ) );

            if ( typeof(options.onUpdate) == 'function' ) {
                options.onUpdate.call( _this, value );
            }

            if ( loopCount >= loops ) {
                clearInterval( interval );
                value = options.to;

                if ( typeof(options.onComplete) == 'function' ) {
                    options.onComplete.call( _this, value );
                }
            }
        }
    } );
}

count.defaults = {
    from           : 0,  // the number the element should start at
    to             : 100,  // the number the element should end at
    speed          : 1000,  // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals       : 0,  // the number of decimal places to show
    onUpdate       : null,  // callback method for every time the element is updated,
    onComplete     : null // callback method for when the element finishes updating
};
