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
const menuItems  = menu.querySelectorAll('.navbar-item')

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
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







function resizeGridItem(item) {
    const grid = document.querySelector(".photo-grid");
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));
    const rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
    const allItems = document.querySelectorAll(".photo-grid img");
    allItems.forEach(item => {
        resizeGridItem(item);
    });
}

function handleImageLoad(img) {
    resizeGridItem(img);
}

// Initial setup
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.photo-grid img');
    images.forEach(img => {
        if (img.complete) {
            handleImageLoad(img);
        } else {
            img.addEventListener('load', () => handleImageLoad(img));
        }
    });
});

// Handle window resize
window.addEventListener("resize", resizeAllGridItems);


// Call functions when the page loads
window.onload = async function() {
    animateOnScroll();
};





