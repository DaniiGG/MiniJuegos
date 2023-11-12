window.onload = function () {
    const display = document.getElementById('display');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let isRunning = false;
    let startTime = 0;
    let interval;
   

    function formatTime(ms) {
        const date = new Date(ms);
        return date.toISOString().substr(11, 8);
    }


    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            if (startTime === 0) {
                startTime = Date.now();
                
            } else {
                startTime += Date.now() - stopTime; 
            }
            interval = setInterval(updateTime, 10);
        }
    }


    function stopTimer() {
        if (isRunning) {
            isRunning = false;
            clearInterval(interval);
        }
    }
    

    function resetTimer() {
        
        stopTimer();
        startTime = 0;
        display.textContent = formatTime(startTime);
        
    }



    function updateTime() {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        display.textContent = formatTime(elapsedTime);
    }


    function stopTimer() {
        if (isRunning) {
            isRunning = false;
            clearInterval(interval);
        }
    }

    
    startButton.addEventListener('click', startTimer);
    
    stopButton.addEventListener("click", stopTimer);

    resetButton.addEventListener('click', resetTimer);
}