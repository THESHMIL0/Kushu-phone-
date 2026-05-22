// Simple function to handle the bottom navigation clicks
function switchTab(tabName) {
  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Add 'active' class to the clicked button
  event.currentTarget.classList.add('active');

  // Here we would normally swap out the innerHTML of .app-content
  console.log(`Switched to ${tabName} tab!`);
}
