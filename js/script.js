const scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

timeline(document.querySelectorAll('.timeline'), {
  forceVerticalMode: 800,
  mode: 'horizontal',
  visibleItems: 4
});