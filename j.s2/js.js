

function formvalidate(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;


var error = document.getElementById("error");

var text = "";

if(email.length<6 || email.indexOf("@") == -1 ){
    text="The email address or mobile number you entered isn't connected to an account."
    error.innerHTML=text;
    return false;


}
else if(password.length<8){
    text="password is very week"
    error.innerHTML=text;
    return false;
    

}
else{
    alert("done");
    return true;
}

}




function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();





let startTime;
let elapsedTime = 0;
let timerInterval;

function start() {
  startTime = new Date().getTime() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
}

function stop() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.querySelector('p').textContent = '00:00:00';
}

function updateTime() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.querySelector('p').textContent = formattedTime;
}

function formatTime(time) {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function pad(value) {
  return value.toString().padStart(2, '0');
}