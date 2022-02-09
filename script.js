let video = document.getElementById("video");
let audio = document.getElementById("audio");
let disp = document.getElementById("med2");
let btnPP = document.getElementById("btn-left");
let stop = document.getElementById("btn-right");
disp.play();


let src1V = "./media/nightV.mp4";
let src1A = "./media/nightA.mp4";
let src2V = "./media/BFV.mp4";
let src2A = "./media/BFA.mp4";
let src3V = "./media/vooo.mp4";
let src3A = "./media/piano.mp4";
let src4V = "./media/vooo.mp4";
let src4A = "./media/Project.mp4";

let video_src = [src1V, src2V, src3V, src4V];
let audio_src = [src1A, src2A, src3A, src4A];


random = Math.floor(Math.random() * 4);
video.src = video_src[random];
audio.src = audio_src[random];


let start = 0;
function playpauseFunc() {
    if (start === 0) {
        start = 1;
        audio.play();
        video.play();
        btnPP.innerHTML = "Pause &#9208;";
        disp.play();
    } else {
        start = 0;
        video.pause();
        audio.pause();
        btnPP.innerHTML = "Play &#9658;";
        disp.play();

    }
}

function stopFunc() {
    video.pause();
    audio.pause();
    video.currentTime = 0;
    btnPP.innerHTML = "Play &#9658;";
    playpauseFunc();
    disp.play();
}


function shuffle() {
    let rand = Math.floor(Math.random() * 4);
    var current = rand;
    video.src = video_src[rand];
    audio.src = audio_src[rand];
    video.play();
    audio.play();
    btnPP.innerHTML = "Pause &#9208;";
    disp.play();
}