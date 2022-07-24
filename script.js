function currentTime() {
  const element = document.querySelector('h1');
  const data = new Date();

  let hour = data.getHours();
  let minutes = data.getMinutes();
  let seconds = data.getSeconds();

  hour = hour < 10 ? `0${hour}` : hour
  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds

  const time = `${hour}:${minutes}:${seconds}`
  element.innerText = time
}

currentTime();
setInterval(currentTime, 1000);
