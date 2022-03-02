
const Date0 = Date.now()
const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

function updateTime() {
  const elapsedTime = Date.now() - Date0
  console.log('elapsedTime: ', elapsedTime)
  chronometer.currentTime = Math.floor(elapsedTime/1000)
  console.log('chronometer.currentTime:', chronometer.currentTime)
  const seconds = chronometer.getSeconds()
  const minutes = chronometer.getMinutes()
  //console.log(`seconds: ${seconds}, minutes: ${minutes}`)
  const secondsDigit0 = chronometer.computeTwoDigitNumber(seconds)[0]
  const secondsDigit1 = chronometer.computeTwoDigitNumber(seconds)[1]
  const minutesDigit0 = chronometer.computeTwoDigitNumber(minutes)[0]
  const minutesDigit1 = chronometer.computeTwoDigitNumber(minutes)[1]
  console.log(minutesDigit0, minutesDigit1, secondsDigit0,secondsDigit1)
  minDecElement.innerText = minutesDigit0
  minUniElement.innerText = minutesDigit1
  secDecElement.innerText = secondsDigit0
  secUniElement.innerText = secondsDigit1
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  //you can't directly modify btnLeftElement.classList by assigning another array
  if (btnLeftElement.classList.contains('start')){
    btnLeftElement.classList.toggle("start")
    btnLeftElement.classList.toggle("stop")
    btnLeftElement.innerText = "STOP"
    btnRightElement.classList.toggle("reset")
    btnRightElement.classList.toggle("split")
    btnRightElement.innerText = "SPLIT"
    chronometer.start(updateTime,1000)
  } else if (btnLeftElement.classList.contains('stop')){
    btnLeftElement.classList.toggle("stop")
    btnLeftElement.classList.toggle("start")
    btnLeftElement.innerText = "START"
    btnRightElement.classList.toggle("split")
    btnRightElement.classList.toggle("reset")
    btnRightElement.innerText = "RESET"
    chronometer.stop()
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')){
    console.log('appending li')
    const newLi = document.createElement("li")
    const textLi = chronometer.computeTwoDigitNumber(chronometer.getMinutes()) + ':' + chronometer.computeTwoDigitNumber(chronometer.getSeconds())
    newLi.innerText = textLi
    splitsElement.appendChild(newLi)
  }
  if (btnRightElement.classList.contains('reset')){
    minDecElement.innerText = 0
    minUniElement.innerText = 0
    secDecElement.innerText = 0
    secUniElement.innerText = 0
    chronometer.currentTime = 0
  }
});
