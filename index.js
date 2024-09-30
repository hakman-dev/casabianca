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
const lightboxImage = document.getElementById('lightboxImage');
const prev = document.querySelector('#prev-button');
const next = document.querySelector('#next-button');
let currentIndex = 0;
const thumbnails = document.querySelectorAll('.thumbnail');


function openLightbox(imageSrc, index) {
    lightbox.style.display = 'flex';
    lightboxImage.src = imageSrc;
    currentIndex = index;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    lightboxImage.src = thumbnails[currentIndex].getAttribute('data-src');
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    lightboxImage.src = thumbnails[currentIndex].getAttribute('data-src');
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        console.log('hi')
        console.log(thumbnail.getAttribute('src'));
        openLightbox(thumbnail.getAttribute('src'), index);
    });
});

prev.addEventListener('click', showPrevImage);
next.addEventListener('click', showNextImage);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});




// LightboxNoScroll functionality
const lightboxNoScroll = document.getElementById('lightbox-noscroll');
const lightboxNoScrollImg = lightboxNoScroll.querySelector('img');

function openLightboxNoScroll(src, index) {
    lightboxNoScrollImg.src = src;
    lightboxNoScroll.style.display = 'flex';
}

function closeLightboxNoScroll() {
    lightboxNoScroll.style.display = 'none';
}

lightboxNoScroll.addEventListener('click', (e) => {
    if (e.target === lightboxNoScroll) {
        closeLightboxNoScroll();
    }
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


