const video = document.getElementById("video");

if(Hls.isSupported()){

const hls = new Hls({

liveSyncDurationCount:1,
liveMaxLatencyDurationCount:2

});

hls.loadSource(CONFIG.stream);

hls.attachMedia(video);

}
