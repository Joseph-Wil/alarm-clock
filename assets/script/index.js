'use strict';

// Utility Functions

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
  
function select(selector, parent = document) {
    return parent.querySelector(selector);
}
  
function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}
  
// Variables

const currentTime = select('.time');
let userInput = select('span');
let hoursInput = select('.hours');
let minutesInput = select('.minutes');
let setAlarmButton = select('.set-alarm');
const alarmAudio = new Audio ('./assets/media/alarm-clock.mp3');


const time = new Date();
const currentHour = time.getHours().toString().padStart(2, '0');
const currentMinutes = time.getMinutes().toString().padStart(2, '0');

// Regex

const hoursRegex = /^(0[0-9]|1[0-9]|2[0-3])$/;
const minutesRegex = /^[0-5][0-9]$/;


onEvent('load', window, () => {
    getTime();
    updateTime();
})

onEvent('click', setAlarmButton, () => {
    validateInput();
})


// Functions

function getTime() {
    const time = new Date();
    const currentHour = time.getHours().toString().padStart(2, '0');
    const currentMinutes = time.getMinutes().toString().padStart(2, '0');
    const currentTimeZone = `${currentHour}:${currentMinutes}`;
    currentTime.innerText = currentTimeZone;

    if (currentTimeZone === userInput.innerText) {
        playAlarm();
        stopAudio.style.display = 'block';
    }
}

function updateTime() {
    setInterval(getTime, 1000);
}

function validateInput() {
    if (hoursRegex.test(hoursInput.value) && minutesRegex.test(minutesInput.value)) {
        userInput.innerText = `${hoursInput.value}:${minutesInput.value}`;
    } else {
        hoursInput.placeholder = '0-23';
        minutesInput.placeholder= '0-59';
    }
}

function playAlarm() {
    alarmAudio.play();
}