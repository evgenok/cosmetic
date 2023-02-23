// ----------video------------
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
$('.to-play').click(function () {
   let = btn = $(this),
      videoID = btn.data('video'),
      playerID = btn.data('id');
   {
      player = new YT.Player(playerID, {
         playerVars: {
            'autoplay': 0,
            'controls': 1,
            'playsinline': 1,
         },
         videoId: videoID,
         events: {
            'onReady': onPlayerReady,
         }
      });
   };
});
function onPlayerReady(event) {
   let video = event.target.h;
   $(video).siblings('.to-play').addClass('removed');
   event.target.playVideo();
}