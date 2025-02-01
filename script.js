// Toggle Hamburger Menu
function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

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