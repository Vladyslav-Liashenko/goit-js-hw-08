const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){console.log("played the video!")})),t.getVideoTitle().then((function(e){console.log("title:",e)})),t.on("timeupdate",(e=>{const t=e.target.currentTime;localStorage.setItem("videoplayer-current-time",t.toString())}));const o=localStorage.getItem("videoplayer-current-time");if(null!==o&&!isNaN(o)){const e=parseFloat(o);t.setCurrentTime(e)}t.play();
//# sourceMappingURL=02-video.fddcc135.js.map
