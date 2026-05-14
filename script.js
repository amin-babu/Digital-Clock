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

  document.querySelector('#hour').innerHTML = hr;
  document.querySelector('#minute').innerHTML = min;
  document.querySelector('#second').innerHTML = sec;
  document.querySelector('#m').innerHTML = m;

  const myDays = ['Sunday', 'Monday', 'Tuesday', 'Webnesday', 'Thursday', 'Friday', 'Saturday'];
  const myMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  document.querySelector('#date').innerHTML = myDays[myDate.getDay()];
  document.querySelector('#day').innerHTML = myDate.getDate();
  document.querySelector('#month').innerHTML = myMonths[myDate.getMonth()];
}

myTime();

setInterval(() => { myTime() }, 1000);