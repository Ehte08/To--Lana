
for(let i=0; i <= document.querySelectorAll(".clip").length; i++){
const videoAll = document.querySelectorAll(".clip")[i];
 videoAll.load();
    if (window.screen.width > 900) {
    videoAll.addEventListener('mouseenter', play)
    videoAll.addEventListener('mouseleave', pause)
    function play(){
        videoAll.play(), videoAll.style.filter = "grayscale(0%)";
    }
    function pause(){
        videoAll.pause(), videoAll.style.filter = "grayscale(100%)";
    }
    }

    videoAll.addEventListener('click', playPause)
    function playPause(){
        if(videoAll.paused)
        {videoAll.play(), videoAll.style.filter = "grayscale(0%)"} 
        else 
        {videoAll.pause(), videoAll.style.filter = "grayscale(100%)";}    
    }
    

}

