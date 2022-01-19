let video = document.getElementById("video");
let audio = document.getElementById("audio");


random = Math.floor(Math.random() * 4);

src1V = "./media/beach.mp4";
src1A = "/media/beach.mp3";

src2V = "./media/forest_V.mp4";
src2A = "./media/forest_A.mp4";

src3V = "./media/nightV.mp4";
src3A = "./media/nightA.mp4";

src4V = "./media/moreseaV.mp4";
src4A = "./media/moreseaA.mp4";

video_src = [src1V,src2V,src3V,src4V];
audio_src = [src1A,src2A,src3A,src4A];

video.src = video_src[random];
audio.src = audio_src[random];

let btnPP = document.getElementById("btn-left");
let stop = document.getElementById("btn-right");

let start = 0;

function playpauseFunc(){
    if (start ===0){
        start = 1;
        video.play();
        audio.play();
        btnPP.innerHTML ="Pause &#9208;";
    }

    else{
        start = 0;
        video.pause();
        audio.pause();
        btnPP.innerHTML ="Play &#9658;";

    }
}

function stopFunc(){
    playpauseFunc();
    video.pause();
    audio.pause();
    video.currentTime = 0;
    btnPP.innerHTML = "Play &#9658;";
    location.reload();
}

