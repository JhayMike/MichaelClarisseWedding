// Our Story Slider
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

//Navbar
const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNavDropdown'); // Use the correct ID here
        // Check if the navbar is currently shown
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// Optional: Change navbar color when scrolling
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-transparent');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Get all the nav links and make it active if clicked
const navLinks = document.querySelectorAll('.nav-link');

// Add click event to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all nav links
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});


// Function to handle scrolling and adding active class
function handleScroll() {
    //const link = document.querySelector('a'); // Get the first <a> element

    navLinks.forEach(link => {
    // Get section by the link's href attribute (remove '#' symbol)
    const section = document.querySelector(link.getAttribute('href'));

    // Get section position
    const sectionTop = section.offsetTop - 50; // Adjust offset for fixed headers if needed
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check if window scroll position is within section boundaries
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        // Add active class to the link
        link.classList.add('active');
    } else {
        // Remove active class if out of bounds
        link.classList.remove('active');
    }
    });
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Get the navbar-brand and the Home link element
const navbarBrand = document.querySelector('.navbar-brand');
const homeLink = document.getElementById('home-link');
const allNavLinks = document.querySelectorAll('.nav-link'); // Get all nav links

// Add click event to navbar-brand
navbarBrand.addEventListener('click', () => {
    // Remove active class from all nav links
    allNavLinks.forEach(link => {
    link.classList.remove('active');
    });

    // Add active class to the Home link
    homeLink.classList.add('active');
});


// Check if Home link is clicked
if (homeLink.textContent.trim() === "home") {
    h1.classList.add('myAnim'); // Add animation class to h1
    h3.classList.add('myAnim'); // Add animation class to h3

    // Optional: Remove animation class after animation completes for re-triggering
    setTimeout(() => {
        h1.classList.remove('myAnim');
        h3.classList.remove('myAnim');
    }, 1000); // 1000ms matches the duration of the animation
}

// Select all elements with the 'animation' class
const sections = document.querySelectorAll('.animate');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the animation class when the section is in view
            entry.target.classList.add('scroll-animation');
        } else {
            // Optionally remove the animation class when out of view
            entry.target.classList.remove('scroll-animation');
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

// Observe each section
sections.forEach((section) => {
    observer.observe(section);
});