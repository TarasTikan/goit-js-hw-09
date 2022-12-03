const startBtn = document.querySelector('button[data-start]')
const stoptBtn = document.querySelector('button[data-stop]')
startBtn.addEventListener('click', onStartColor)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
let timerId 

function onStartColor () {
    startBtn.setAttribute('disabled', '')
    stoptBtn.removeAttribute('disabled')
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    },1000)
}

stoptBtn.addEventListener('click', onStopColor)

function onStopColor () {
    clearInterval(timerId)
    startBtn.removeAttribute('disabled')
    stoptBtn.setAttribute('disabled', '')
}