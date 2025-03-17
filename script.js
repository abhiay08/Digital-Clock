function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();
  const dateString = `${dayName}, ${monthName} ${day}, ${year}`;

  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;

  const welcomeMessage = "Welcome to the Digital Clock!";
  document.getElementById('welcome').textContent = welcomeMessage;

  let greetingMessage;
  if (hours < 12) {
      greetingMessage = "Good Morning!";
  } else if (hours < 18) {
      greetingMessage = "Good Afternoon!";
  } else {
      greetingMessage = "Good Evening!";
  }
  document.getElementById('greeting').textContent = greetingMessage;
}

setInterval(updateClock, 1000);
updateClock();