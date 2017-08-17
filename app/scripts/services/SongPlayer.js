(function(){
  function SongPlayer(Fixtures) {
    var SongPlayer = {};
    /**
    * @desc gets the content of current album
    * @type {Object}
    */
    var currentAlbum = Fixtures.getAlbum();

    var getSongIndex = function(song) {
    return currentAlbum.songs.indexOf(song);
};
    /**
    * @function getSongIndex
    * @desc gets the index of a song
    * @param {Object} song
    */
    var getSongIndex = function(song){
      return currentAlbum.songs.indexOf(song);
    };

    SongPlayer.currentSong = null;
    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song){
      if(currentBuzzObject){
        stopSong();
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      SongPlayer.currentSong = song;
    };

    /**
    * @function playSong
    * @desc plays current song and set its playing property to true
    * @param {Object} song
    */
    var playSong = function(song){
      currentBuzzObject.play();
      song.playing = true;
    };

    SongPlayer.play = function(song){
      song = song || SongPlayer.currentSong;

      if(SongPlayer.currentSong !== song){
        setSong(song);

        playSong(song);
      } else if (SongPlayer.currentSong === song) {
          if(currentBuzzObject.isPaused()){

            playSong(song);
          }
      }
    };

    /**
    * @function stopSong
    * @desc stop song playing
    */
    var stopSong = function(){
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    };

    SongPlayer.pause = function(song){
      song = song || SongPlayer.currentSong;

      currentBuzzObject.pause();
      song.playing = false;
    };
    /**
    * @function previous
    * @desc plays the previous song
    */
    SongPlayer.previous = function() {
      /**
      * @desc gets the index of current playing song
      */
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if (currentSongIndex < 0) {
          stopSong();
        } else {
            var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
        }
    };

    /**
    * @function next
    * @desc sets the next song
    */
    SongPlayer.next = function() {
      /**
      * @desc gets the index of current playing song
      */
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;

      if (currentSongIndex > currentAlbum.songs.length) {
          stopSong();
        } else {
            var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
        }
    };
    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
