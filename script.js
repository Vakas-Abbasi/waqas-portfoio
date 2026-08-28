// =============================
// REVEAL ANIMATION
// =============================
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealEls.forEach(el => observer.observe(el));


// =============================
// TEXT SLIDER
// =============================
const sliderWords = ["fast.", "reliable.", "scalable.", "modern."];
let sliderIndex = 0;
const sliderEl = document.getElementById('slider-word');

if (sliderEl) {
  setInterval(() => {
    sliderEl.classList.add('fade-out');

    setTimeout(() => {
      sliderIndex = (sliderIndex + 1) % sliderWords.length;
      sliderEl.textContent = sliderWords[sliderIndex];
      sliderEl.classList.remove('fade-out');
    }, 400);

  }, 2200);
}


// =============================
// ACTIVE NAV LINK (FINAL FIX)
// =============================
const navLinks = document.querySelectorAll(".navlinks a");

// current page nikaalo
let currentPage = window.location.pathname.split("/").pop();

// agar empty ho to index.html set karo
if (currentPage === "") {
  currentPage = "index.html";
}

navLinks.forEach(link => {
  let linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});