// 1. Update the top status bar clock
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

// 2. Calculate the "Days Together" milestone
function updateMilestone() {
  // Set the start date here (August 18th)
  // Just change the year to the exact year you met
  const startDate = new Date('August 18, 2022'); 
  const today = new Date();
  
  // Calculate the difference in milliseconds, then convert to days
  const differenceInTime = today.getTime() - startDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  
  // Update the HTML
  document.getElementById('days-count').innerText = differenceInDays.toLocaleString();
}

updateMilestone();
// Opens an app window by sliding it up
function openApp(appId) {
  document.getElementById(appId).classList.add('active');
}

// Closes an app window by sliding it back down
function closeApp(appId) {
  document.getElementById(appId).classList.remove('active');
}
