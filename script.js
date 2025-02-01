// Toggle Hamburger Menu
function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');
}

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');

if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = 'Light Mode';
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    darkModeToggle.textContent = 'Light Mode';
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    darkModeToggle.textContent = 'Dark Mode';
  }
});
