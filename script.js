document.querySelectorAll('.btn-card').forEach(button => {
  button.addEventListener('click', () => {
    const original = button.textContent;
    button.textContent = "Agregado ✓";
    button.style.backgroundColor = "#1a1a1a";
    button.style.color = "#fff";

    setTimeout(() => {
      button.textContent = original;
      button.style.backgroundColor = "";
      button.style.color = "";
    }, 1200);
  });
});

const form = document.querySelector('.form-contacto');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    form.reset();
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navOverlay = document.querySelector('.nav-overlay');

function closeMenu() {
  menuToggle.classList.remove('open');
  nav.classList.remove('open');
  navOverlay.classList.remove('open');
}

function toggleMenu() {
  menuToggle.classList.toggle('open');
  nav.classList.toggle('open');
  navOverlay.classList.toggle('open');
}

menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const faders = document.querySelectorAll('.fade-in');
const appearObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

faders.forEach(el => appearObserver.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => navObserver.observe(section));
