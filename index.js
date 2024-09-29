// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation items
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentImageIndex = 0;
let images = [];

function openLightbox(src, index) {
    lightboxImg.src = src;
    currentImageIndex = index;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}


// LightboxNoScroll functionality
const lightboxNoScroll = document.getElementById('lightbox-noscroll');
const lightboxNoScrollImg = lightboxNoScroll.querySelector('img');

function openLightboxNoScroll(src, index) {
    lightboxNoScrollImg.src = src;
    currentImageIndex = index;
    lightboxNoScroll.style.display = 'flex';
}

function closeLightboxNoScroll() {
    lightboxNoScroll.style.display = 'none';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImg.src = images[currentImageIndex].src.replace('width=300&height=200', 'width=1200&height=800');
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex].src.replace('width=300&height=200', 'width=1200&height=800');
}

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

lightboxNoScroll.addEventListener('click', (e) => {
    if (e.target === lightboxNoScroll) {
        closeLightboxNoScroll();
    }
});

prevButton.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrevImage();
});

nextButton.addEventListener('click', (e) => {
    e.stopPropagation();
    showNextImage();
});


function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Call functions when the page loads
window.onload = async function() {
    animateOnScroll();
};