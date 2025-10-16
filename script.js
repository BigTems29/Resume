// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn.addEventListener('click', () => navMenu.classList.toggle('show'));

// Simple email form (mock)
document.getElementById('contactForm').addEventListener('submit', () => {
  document.getElementById('formMsg').textContent = "✅ Sending your message...";
});
