const timer = document.getElementById('timer');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const bell = document.getElementById('bell');
const shake = document.getElementById('shake');
const audio = document.getElementById('audio');
const audios = document.getElementById('audios');

let timers = setInterval(() => {
    const currrent = new Date().toLocaleTimeString("it-IT")
    timer.innerHTML = currrent;
    audio.play();
    if(currrent === '17:53:30'){
        audios.play();
        bell.classList.add('fa-shake');
        setTimeout(() => {
            bell.classList.remove('fa-shake');
            audios.style.display = 'none';
            audio.pause();
            
        }, 100000);
       
    }
    


}, 1000);



start.addEventListener('click', () => {
    clearInterval(timers);
    timers = setInterval(() => {
        timer.innerHTML = new Date().toLocaleTimeString("it-IT");
    }, 0);
    if(bell.classList.contains('fa-shake')){
        bell.classList.remove('fa-shake');
    }
    if(audios.style.display === 'none'){
        audios.style.display = 'block';
    }
    if(audio.paused){
        audio.play();
    }
   

});

pause.addEventListener('click', () => {
    clearInterval(timers);
    audios.pause();
    bell.classList.remove('fa-shake');
    clearInterval(audio);
    audio.pause();

});


