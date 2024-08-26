console.log("Welcome to Jio Saavn");
// Initialize the Variables
let songIndex =0;
let audioelement=new Audio('Songs/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif =document.getElementById('gif');
let myProgressBar =document.getElementById('myProgressBar');
let songitem=Array.from(document.getElementsByClassName('songitem'));

let songs =[
    {songName: "Starboy",filePath:"Songs/0.mp3",coverPath:"cover.png"},
    {songName: "Popular",filePath:"Songs/1.mp3",coverPath:"Popular.jpg"},
    {songName: "Blinding Lights",filePath:"Songs/2.mp3",coverPath:"Lights.jpg"},
    {songName: "After Hours",filePath:"Songs/3.mp3",coverPath:"After.jpg"},
    {songName: "Often",filePath:"Songs/4.mp3",coverPath:"Often.jpg"},
    {songName: "Save Your Tears",filePath:"Songs/5.mp3",coverPath:"Tears.jpg"},
    {songName: "The Hills",filePath:"Songs/6.mp3",coverPath:"The_Hills.jpg"}
]

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

// audioelement.play();


//Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
})

// Listen to Events
audioelement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime=(myProgressBar.value*audioelement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`Songs/${songIndex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

.document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioelement.src=`Songs/${songIndex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

.document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=6;
    }
    else{
        songIndex-=1;
    }
    audioelement.src=`Songs/${songIndex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})