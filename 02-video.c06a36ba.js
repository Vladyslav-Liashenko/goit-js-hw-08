!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){console.log("played the video!")})),t.getVideoTitle().then((function(e){console.log("title:",e)})),t.on("timeupdate",(function(e){var t=e.target.currentTime;localStorage.setItem("videoplayer-current-time",t.toString())}));var o=localStorage.getItem("videoplayer-current-time");if(null!==o&&!isNaN(o)){var r=parseFloat(o);t.setCurrentTime(r)}t.play()}();
//# sourceMappingURL=02-video.c06a36ba.js.map