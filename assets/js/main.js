jQuery(document).ready(function ($) {
    // menu bg add
    function checkScroll() {
      if ($(window).scrollTop() > 50) {
          $(".header-area").addClass("menu-bg");
      } else {
          $(".header-area").removeClass("menu-bg");
      }
    }
    $('.key-features-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: $('.arrow-left'),
      nextArrow: $('.arrow-right'),  
    });
    $(document).on("click", function (event) {
      const $div = $("#outside-click");
      const $navbarText = $("#navbarText");
      if (!$div.is(event.target) && $div.has(event.target).length === 0) {
        $navbarText.removeClass("show");
      }
    });
    $(document).ready(function () {
      checkScroll();
    });
    $(window).on("scroll", function () {
      checkScroll();
    });
})
 // Smooth scroll with offset
 document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 120;
      const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth'
      });
    }
  });
});
// ScrollSpy: Add active class to nav links
const sections = document.querySelectorAll('section[id]'); // Ensure each section has a unique ID
const navLinks = document.querySelectorAll('.nav-link');
// IntersectionObserver setup
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-target') === targetId) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  {
    threshold: 0.6,
    rootMargin: `-120px 0px 0px 0px`
  }
);
// Observe all sections
sections.forEach(section => observer.observe(section));
// Activate "About" section on page load
window.addEventListener('DOMContentLoaded', () => {
  // Trigger the IntersectionObserver manually for the "About" section
  const aboutSection = document.getElementById('home');
  if (aboutSection) {
    const targetId = aboutSection.id;
    navLinks.forEach(link => {
      link.classList.remove('active'); // Remove active class from all links
      if (link.getAttribute('data-target') === targetId) {
        link.classList.add('active'); // Add active class to the "About" link
      }
    });
  }
});
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('loader-hide');
});
