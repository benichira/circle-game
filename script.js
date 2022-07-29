//ELEMENTS
let displayedTimes = document.getElementById("displayed-time");
let circle = document.getElementById("moving-circle");
let time = document.getElementById("timer-p");

//TIME VARIABLES
let mouseClicks = 0;
let seconds = 0;
let minutes = 0;
let timer = 0;
let tens = 0;
let Interval;

//COLORS
let randomColors;
let colors = ['red', 'blue', 'green', 'white', 'grey', '#c75a37', '#55e1df', '#f8baed', '#ece35e']

//onClick EVENT
circle.addEventListener("click", () => {
    randomColors = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColors
    mouseClicks++;

    //CIRCLE POSITION
    let x = Math.floor(Math.random() * 420);
    let y = Math.floor(Math.random() * 420);
    circle.style.top = x + 'px';
    circle.style.left = y + 'px';

    //CONDITIONS
    if (mouseClicks > 1) {
        tens = 0;
        seconds = 0
        clearInterval(Interval);
        Interval = setInterval(timerHandler, 10);
        let newElement = document.createElement('p');
        displayedTimes.appendChild(newElement).innerText = `${timer}`;
    }
    if (mouseClicks === 1) {
        tens = 0;
        seconds = 0
        clearInterval(Interval);
        Interval = setInterval(timerHandler, 10);
    }
})

//TIMER LOGIC
const timerHandler = () => {
    tens++
    if (tens <= 9) {
        timer = `0.${tens}`;
    }
    if (tens > 9) {
        timer = `0${seconds}.${tens}`;
    }
    if (tens > 99) {
        seconds++
        timer = `${seconds}.${tens}`
        tens = 0
    }
    if (seconds > 9) {
        timer = `${seconds}.${tens}`
    }
    if (seconds === 60) {
        minutes++;
        seconds = 0;
        timer = `0${minutes}:${seconds}.${tens}`;
    }
    time.innerHTML = timer
}



