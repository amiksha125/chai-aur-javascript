const clock = document.getElementById('clock');

// the func date.toLocaleString() should be run continously
// in server we use cron job, but its a small task

//setInterval(callback, miliseconds) method
// 1 sec = 1000ms

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)