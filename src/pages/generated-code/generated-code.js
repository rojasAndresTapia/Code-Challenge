// *************** VARS ************************

const getCounter = document.getElementById('counter');
let timeSecond = 0;
let timeMinute = 20;

const year = localStorage.getItem('userYear');
const phrase = localStorage.getItem('userChoise');

const getCode = document.getElementById('code');
const reboot = document.getElementById('reboot');
const span = document.createElement('span');
const link = document.createElement('a');


// *************** CODE ************************

const strYear = year.toString();

const sumYearNum =
  parseInt(strYear[strYear.length - 2]) + parseInt(strYear[strYear.length - 1]);

const newPhrase = phrase.split('a').join('');
const secondNewPhrase = newPhrase.split('A').join('');
const thirdNewPhrase = newPhrase.split(' ').join('');

const finalLetters = thirdNewPhrase.substring(thirdNewPhrase.length - 4);

const code = sumYearNum + finalLetters;
getCode.innerHTML = code;


// *************** COUNTER ************************

const countDown = setInterval(() => {

  timeSecond--;

  if (timeSecond < 0  && timeMinute < 1) {

    getCounter.setAttribute('class', 'hide');

    reboot.appendChild(span);
    reboot.setAttribute('class', 'show');
    span.setAttribute('class', 'expired');
    span.innerHTML = "Código caducado. ";
    span.appendChild(link);
    link.setAttribute('href', '../home/home.html');
    link.innerHTML = 'Reiniciar'


  }
  if (timeSecond < 0) {
    timeSecond = 59;
    timeMinute--;
    getCounter.innerHTML = `${timeMinute}:${timeSecond}`;
  } else if (timeSecond < 10) {
    getCounter.innerHTML = `${timeMinute}:0${timeSecond}`;
  } else {
    getCounter.innerHTML = `${timeMinute}:${timeSecond}`;
  }
}, 1000);

// *************** COPY TO CLIPBOARD ************************

const copyToClipboard = document.querySelector('#btnCopy').addEventListener('click', () => {
  const cb = navigator.clipboard;
  cb.writeText(code).then(() => {
    alert("Text copied: " + code);
  });
});
