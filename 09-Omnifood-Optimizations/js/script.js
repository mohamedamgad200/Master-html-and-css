///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header-section");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
// Add smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    //if scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //scroll to other link
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //close navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
///////////////////////////////////////////////////////////
// Sticky navigation
const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // where this element should apper or not;
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(heroSection);
