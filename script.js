// Scroll from prelanding to poetic section
document.querySelector('.prelanding p').addEventListener('click', function () {
    document.querySelector('.poetic').scrollIntoView({ behavior: 'smooth' });
});

// Combined scroll event for showing/hiding vertical navigation bar
window.addEventListener('scroll', function () {
    const navBar = document.querySelector('.vertical-nav');
    const scrollPosition = window.scrollY;

    // Show the vertical navbar once we reach the poetic section
    if (scrollPosition >= document.querySelector('.poetic').offsetTop - 50) {
        navBar.style.display = 'flex';
    } else {
        navBar.style.display = 'none';
    }

    // Hide the vertical navbar when scrolling to the About Me section
    const aboutMeSection = document.querySelector('#aboutme');
    if (scrollPosition >= aboutMeSection.offsetTop - 50) {
        navBar.style.display = 'none';
    }
});

// Handle smooth scrolling for vertical nav bar links
document.querySelectorAll('.vertical-nav .nav-links a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// Show horizontal navigation bar when scrolling to the About Me section
window.addEventListener('scroll', function () {
    const horizontalNavBar = document.querySelector('.horizontal-nav');
    const aboutMeSection = document.querySelector('#aboutme');
    const scrollPosition = window.scrollY;

    // Show horizontal navbar when scrolling past the poetic section
    if (scrollPosition >= aboutMeSection.offsetTop - 50) {
        horizontalNavBar.style.display = 'block';  // Show horizontal navbar
    } else {
        horizontalNavBar.style.display = 'none';   // Hide horizontal navbar
    }
});
// Smooth scroll for all nav links
document.querySelectorAll('nav a, .vertical-nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Show/hide navbars based on scroll
window.addEventListener('scroll', function () {
    const verticalNav = document.querySelector('.vertical-nav');
    const horizontalNav = document.querySelector('.horizontal-nav');
    const scrollY = window.scrollY;
    const poeticTop = document.querySelector('.poetic').offsetTop;
    const aboutTop = document.querySelector('#aboutme').offsetTop;

    // Show vertical nav from poetic to aboutme
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
// Add event listener to all gallery images to open in full screen
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor tag behavior
    const imageSrc = item.querySelector('img').src; // Get image source
    openFullScreen(imageSrc);
  });
});
// Smooth Scroll for the Prelanding page
document.querySelector('.clickable-area').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default anchor click behavior

  // Get the target section using the href attribute
  const targetSection = document.querySelector(this.getAttribute('href'));
  
  // Use window.scrollTo to scroll to the target position with smooth scrolling
  window.scrollTo({
    top: targetSection.offsetTop - 49, // Adjust for padding-top (49px)
    behavior: 'smooth' // Smooth scrolling animation
  });
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        const yOffset = -20; // Minimal offset to prevent over-scroll
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});
