
function formatTime() {
  var nowTime = new Date();
  var hrs = nowTime.getHours();
  var mins = nowTime.getMinutes();
  var secs = nowTime.getSeconds();

  if (secs < 10) { secs = "0" + secs; }
  if (mins < 10) { mins = "0" + mins; }
  if (hrs <10 ) { hrs = "0" + hrs; }

  var newTime = document.getElementById("clock");
  newTime.innerHTML = (hrs + ":" + mins + ":" + secs);
}

setInterval(formatTime, 1000);
