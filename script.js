var player;
var started = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'NCeOjfT6Yzo',
        playerVars: {
            autoplay: 0,
            loop: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playlist: 'NCeOjfT6Yzo',
            enablejsapi: 1
        },
        events: {
            onReady: function () {},
            onError: function () {}
        }
    });
}

document.addEventListener('click', function firstClick() {
    if (!started && player && player.playVideo) {
        player.playVideo();
        started = true;
    }
}, { once: true });
