const randomColor = function() {
  const hex = `0123456789ABCDEF`;
  var color = `#`;
  for(let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
let intervalId = null;

startBtn.addEventListener('click', (e) => {
  console.log('start')
  if(intervalId === null) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});
stopBtn.addEventListener('click', (e) => {
  if(intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    console.log('stopped')
  }
});

// ADDEVENTLISTNERS EVENTS AND KEY CODES.
const hello = document.querySelector('.hello')

hello.addEventListener('click', (e) => {
  console.log(e.keycode)
})