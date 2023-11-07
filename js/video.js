document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("player1");
    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");
    const slowerButton = document.getElementById("slower");
    const fasterButton = document.getElementById("faster");
    const skipButton = document.getElementById("skip");
    const muteButton = document.getElementById("mute");
    const volumeSlider = document.getElementById("slider");
    const volumeText = document.getElementById("volume");
    const vintageButton = document.getElementById("vintage");
    const originalButton = document.getElementById("orig");

    let isMuted = false;

    // Initialize video
    video.autoplay = false;
    video.loop = false;

    // Play Button
    playButton.addEventListener("click", function () {
        video.play();
        updateVolumeInfo();
    });

    // Pause Button
    pauseButton.addEventListener("click", function () {
        video.pause();
    });

    // Slow Down
    slowerButton.addEventListener("click", function () {
        video.playbackRate -= 0.1;
        console.log("New playback rate: " + video.playbackRate);
    });

    // Speed Up
    fasterButton.addEventListener("click", function () {
        video.playbackRate += 0.1;
        console.log("New playback rate: " + video.playbackRate);
    });

    // Skip Ahead
    skipButton.addEventListener("click", function () {
        if (video.currentTime + 10 < video.duration) {
            video.currentTime += 10;
        } else {
            video.currentTime = 0;
        }
        console.log("Current video location: " + video.currentTime);
    });

    // Mute
    muteButton.addEventListener("click", function () {
        isMuted = !isMuted;
        video.muted = isMuted;
        muteButton.innerText = isMuted ? "Unmute" : "Mute";
    });

    // Volume Slider
    volumeSlider.addEventListener("input", function () {
        const volumeValue = volumeSlider.value;
        video.volume = volumeValue / 100;
        volumeText.innerText = volumeValue + "%";
    });

    // Styled (Add oldSchool class)
    vintageButton.addEventListener("click", function () {
        video.classList.add("oldSchool");
    });

    // Original (Remove oldSchool class)
    originalButton.addEventListener("click", function () {
        video.classList.remove("oldSchool");
    });

    // Update volume information
    function updateVolumeInfo() {
        volumeSlider.value = video.volume * 100;
        volumeText.innerText = volumeSlider.value + "%";
    }
});




