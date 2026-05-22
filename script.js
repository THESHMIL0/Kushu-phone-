// 1. Register Service Worker for PWA Installation
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((reg) => console.log('Service Worker registered!', reg))
    .catch((err) => console.log('Service Worker registration failed:', err));
}

// 2. Update the top status bar clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  // Format to 12-hour clock
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  document.getElementById('clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// 3. Calculate the "Days Together" milestone
function updateMilestone() {
  const startDate = new Date('August 18, 2022'); 
  const today = new Date();
  
  const differenceInTime = today.getTime() - startDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  
  document.getElementById('days-count').innerText = differenceInDays.toLocaleString();
}
updateMilestone();

// 4. App Navigation Functions
function openApp(appId) {
  document.getElementById(appId).classList.add('active');
}

function closeApp(appId) {
  document.getElementById(appId).classList.remove('active');
}
}

// Closes an app window by sliding it back down
function closeApp(appId) {
  document.getElementById(appId).classList.remove('active');
}
