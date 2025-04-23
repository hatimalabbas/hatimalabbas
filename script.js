// Smooth scroll to poetic section from prelanding
document.querySelector('.prelanding p').addEventListener('click', function () {
    document.querySelector('.poetic').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for any anchor nav links
document.querySelectorAll('nav a, .vertical-nav a, .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const yOffset = -20;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// Handle vertical and horizontal nav bar visibility based on scroll
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const poeticTop = document.querySelector('.poetic').offsetTop;
    const aboutTop = document.querySelector('#aboutme').offsetTop;
    const verticalNav = document.querySelector('.vertical-nav');
    const horizontalNav = document.querySelector('.horizontal-nav');

    if (scrollY >= poeticTop - 50 && scrollY < aboutTop - 150) {
        verticalNav.style.display = 'flex';
    } else {
        verticalNav.style.display = 'none';
    }

    if (scrollY >= aboutTop - 150) {
        horizontalNav.style.display = 'flex';
    } else {
        horizontalNav.style.display = 'none';
    }
});

// Clickable area (like full pre-landing page click) smooth scroll
document.querySelector('.clickable-area')?.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        window.scrollTo({ top: target.offsetTop - 49, behavior: 'smooth' });
    }
});

// Open gallery images in full screen
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const imageSrc = item.querySelector('img').src;
        openFullScreen(imageSrc); // This function should be defined elsewhere
    });
});
// Handle dropdown navigation on mobile
document.querySelector('.nav-dropdown').addEventListener('change', function() {
  const targetSection = document.querySelector(this.value);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});
// Ensure smooth scrolling and functionality when a dropdown option is selected
document.querySelector('#nav-dropdown').addEventListener('change', function() {
    const targetSection = document.querySelector(this.value);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
window.addEventListener('scroll', function () {
    const verticalNav = document.querySelector('.vertical-nav');
    const horizontalNav = document.querySelector('.horizontal-nav');
    const scrollY = window.scrollY;
    const poeticTop = document.querySelector('.poetic').offsetTop;
    const aboutTop = document.querySelector('#aboutme').offsetTop;

    // Show vertical nav from poetic to just before About Me
    if (scrollY >= poeticTop - 50 && scrollY < aboutTop - 150) {
        verticalNav.style.display = 'flex';
    } else {
        verticalNav.style.display = 'none';
    }

    // Show horizontal nav at and after About Me (only on large screens)
    if (scrollY >= aboutTop - 150 && window.innerWidth > 768) {
        horizontalNav.style.display = 'flex';
    } else {
        horizontalNav.style.display = 'none';
    }
});
window.addEventListener('scroll', () => {
  const poeticSection = document.getElementById('poetic');
  const horizontalNav = document.getElementById('horizontal-nav-wrapper');

  if (window.scrollY >= poeticSection.offsetHeight) {
    horizontalNav.style.display = 'block';
  } else {
    horizontalNav.style.display = 'none';
  }
});
function scrollToSection(sectionId) {
  if (sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  }
}

window.addEventListener('scroll', () => {
  const poeticSection = document.getElementById('poetic');
  const horizontalNav = document.getElementById('horizontal-nav-wrapper');

  if (window.scrollY >= poeticSection.offsetTop + poeticSection.offsetHeight) {
    horizontalNav.style.display = 'block';
  } else {
    horizontalNav.style.display = 'none';
  }
});
window.addEventListener('scroll', () => {
  const poetic = document.getElementById('poetic');
  const navWrapper = document.getElementById('horizontal-nav-wrapper');

  // Compute when bottom of Poetic is scrolled past top of viewport
  const poeticBottom = poetic.getBoundingClientRect().bottom;

  if (poeticBottom <= 0) {
    // Once the Poetic section is completely scrolled offscreen, show nav
    navWrapper.style.display = 'block';
  } else {
    // Before Poetic fully scrolls away, keep nav hidden
    navWrapper.style.display = 'none';
  }
});
// Check the scroll position and toggle horizontal nav visibility
window.addEventListener("scroll", function() {
    var horizontalNavWrapper = document.getElementById('horizontal-nav-wrapper');
    var aboutMeSection = document.getElementById('aboutme');
    var rect = aboutMeSection.getBoundingClientRect();

    // Make horizontal nav visible when scrolled to the 'About Me' section
    if (rect.top <= 0) {
        horizontalNavWrapper.style.display = "block"; // Show horizontal nav
    } else {
        horizontalNavWrapper.style.display = "none"; // Hide horizontal nav
    }
});
