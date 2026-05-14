function myTime() {
  let myDate = new Date();
  let hr;
  let min = myDate.getMinutes() < 10 ? `0${myDate.getMinutes()}` : myDate.getMinutes();
  let sec = myDate.getSeconds() < 10 ? `0${myDate.getSeconds()}` : myDate.getSeconds();
  let m = myDate.getHours() >= 12 ? 'PM' : 'AM';

  if (myDate.getHours() === 0) {
    hr = 12;
  } else if (myDate.getHours() > 12) {
    hr = myDate.getHours() - 12;
  } else {
    hr = myDate.getHours();
  }

  let currentTime = `${hr} : ${min} : ${sec}`;

  document.querySelector('#h').innerHTML = currentTime;
  document.querySelector('#m').innerHTML = m;

  const myDays = ['Sunday', 'Monday', 'Tuesday', 'Webnesday', 'Thursday', 'Friday', 'Saturday'];
  const myMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let day = myDate.getDate();
  let currentDate = `${myDays[myDate.getDay()]}, ${myMonths[myDate.getMonth()]} ${day}`;

  document.querySelector('#date').innerHTML = currentDate;
}

myTime();

setInterval(() => { myTime() }, 1000);