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
let hours = select('.hours').setAttribute('maxlength', '2');
let minutes = select('.minutes').setAttribute('maxlength', '2');
let setAlarmButton = select('.set-alarm');


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

onEvent('click', () => {
    setAlarmButton();
})

// Functions

function getTime() {
    const time = new Date();
    const currentHour = time.getHours().toString().padStart(2, '0');
    const currentMinutes = time.getMinutes().toString().padStart(2, '0');
    currentTime.innerText = `${currentHour}:${currentMinutes}`;
}

function updateTime() {
    setInterval(getTime, 1000);
}

function validateInput() {
    if (hoursRegex.test(hours.value) && minutesRegex.test(minutes.value)) {
        userInput.innerText = `${hours.value}:${minutes.value}`;
        
    }
}
