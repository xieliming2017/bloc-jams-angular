(function(){
  function Fixtures(){
    var Fixtures = {};

    var albumPicasso = {
         title: 'The Colors',
         artist: 'Pablo Picasso',
         label: 'Cubism',
         year: '1881',
         albumArtUrl: '/assets/images/album_covers/01.png',
         songs: [
             { title: 'Blue', duration: 161.71, audioUrl: '/assets/music/blue' },
             { title: 'Green', duration: 103.96, audioUrl: '/assets/music/green' },
             { title: 'Red', duration: 268.45, audioUrl: '/assets/music/red' },
             { title: 'Pink', duration: 153.14, audioUrl: '/assets/music/pink' },
             { title: 'Magenta', duration: 374.22, audioUrl: '/assets/music/magenta' }
         ]
     };

     var albumDaVinci = {
         title: 'The Genius',
         artist: 'Leonardo da Vinci',
         label: 'Versatile',
         year: '1452',
         albumArtUrl: '/assets/images/album_covers/07.png',
         songs: [
             { title: 'Mona Lisa', duration: '1:01' },
             { title: 'The Last Supper', duration: '2:01' },
             { title: 'The Vitruvian Man', duration: '3:21'},
             { title: 'Lady with an Ermine', duration: '4:14' },
             { title: 'Virgin of the Rocks', duration: '5:15'}
         ]
     };

     Fixtures.getAlbum = function(){
       return albumPicasso;
     }

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();
