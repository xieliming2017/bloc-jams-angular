(function() {
    function timecode() {
        return function(seconds) {
          var output = buzz.toTimer(seconds);

            return output;
        };
    }

    angular
        .module('blocJams')
        .filter('timecode', timecode);
})();
