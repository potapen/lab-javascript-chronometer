class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    // ... your code goes here
    // console.log(callback)
    if(callback === undefined){console.log('no callback defined')}
    else{
      this.intervalId = setInterval(callback, 1000)
    }
  }

  getMinutes() {
    // ... your code goes here
    //this.currentTime contains the numbers of seconds that has passed
    // console.log('this.currentTime in s :', this.currentTime)
    const numberMinute = Math.floor(this.currentTime/60)
    // console.log('numberMinute: ',numberMinute)
    return numberMinute
  }

  getSeconds() {
    // ... your code goes here
    //this.currentTime contains the numbers of seconds that has passed
    // console.log('this.currentTime in s :', this.currentTime)
    const numberSecondsFromLastMinute = this.currentTime % 60
    // console.log('numberSecondsFromLastMinute: ',numberSecondsFromLastMinute)
    return numberSecondsFromLastMinute
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const outputString = value.toString().padStart(2, '0')
    //console.log('padded outputString: ', outputString)
    return outputString
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    //console.log('before reset :', this.currentTime)
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const formattedTimeString = this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())
    return formattedTimeString
  }
}


/*
💡 Hint 1: Keep in mind, if you pass a function declaration to the setInterval() method (by writing setInterval(function () {})),
 the keyword this will not refer to the object chronometer, but to global scope. To enable referencing the chronometer by accessing this,
  pass a function expression (a so-called arrow function) to the setInterval() method (by writing setInterval(() => {}) instead).
*/


/* TESTING
//initiate time
const myChrono = new Chronometer()
const Date0 = Date.now()
console.log('Date0 :', Date0)
*/

/* TESTING
const dummyFunction = () => {console.log('hello')}
myChrono.start(dummyFunction)
myChrono.currentTime = 124
console.log(myChrono.getMinutes())
console.log(myChrono.getSeconds())
console.log('myChrono.computeTwoDigitNumber(1) :', myChrono.computeTwoDigitNumber(1))
console.log('myChrono.computeTwoDigitNumber(11) :', myChrono.computeTwoDigitNumber(11))
myChrono.reset()
myChrono.currentTime = 201
console.log('myChrono.currentTime: ', myChrono.currentTime)
console.log('myChrono.split(): ', myChrono.split())
*/



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
