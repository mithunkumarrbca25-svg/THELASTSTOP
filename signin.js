// SLIDESHOW
let slideIdx = 0;
function showSlides() {
  let slides = document.querySelectorAll('.slide');
  slides.forEach((s, i) => {
    s.style.display = 'none';
    s.style.opacity = 0;
  });
  slideIdx++;
  if (slideIdx > slides.length) { slideIdx = 1; }
  slides[slideIdx-1].style.display = 'block';
  setTimeout(() => slides[slideIdx-1].style.opacity = 1, 100);
  setTimeout(showSlides, 5000);
}
if (document.querySelector('.slideshow')) showSlides();

// PRODUCTS DROPDOWN
const productsLink = document.getElementById('products-link');
const dropdown = document.getElementById('products-dropdown');
if (productsLink) {
  productsLink.addEventListener('click', function(e) {
    e.preventDefault();
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    setTimeout(() => dropdown.style.display = 'none', 3000);
  });
}
// Hide dropdown if clicked outside
window.addEventListener('click', function(e){
  if (dropdown && !dropdown.contains(e.target) && e.target !== productsLink) {
    dropdown.style.display = 'none';
  }
});

// SIGNIN SUBMIT
const regForm = document.getElementById('registrationForm');
if (regForm) {
  regForm.addEventListener('submit', function(e) {
    e.preventDefault();
    regForm.style.display = 'none';
    document.getElementById('thanksMessage').style.display = 'block';
  });
}