const langToggle = document.querySelector('.lang-toggle');
const langBtn = document.querySelector('.lang-button');

langBtn.addEventListener('click', () => {
  langToggle.classList.toggle('active');
});
