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

async function loadPhotos() {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            openLightbox(thumbnail.getAttribute('data-src'), index);
        });
    });


    // console.log(document.getElementsByClassName('thumbnail'))
    // const thumbnails = document.getElementsByClassName('thumbnail');
    // Array.from(thumbnails).forEach((thumbnail, index) => {
    //     const imageUrl = `./images/Naamloos_HDR${index}.jpg`;
    //     thumbnail.setAttribute('data-src', imageUrl);
    // });
    // for (let i = 1; i < ; i++) {
    //     const imageUrl = `./images/Naamloos_HDR${i}.jpg?width=300&height=200`;
    //     const img = document.createElement('img');
    //     img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Placeholder
    //     img.setAttribute('data-src', imageUrl);
    //     img.alt = `Casa Encanto foto ${i}`;
    //     img.className = 'w-full h-full object-cover rounded-lg cursor-pointer lazy';
    //     img.onclick = () => openLightbox(img.src.replace('width=300&height=200', 'width=1200&height=800'), images.length);
    //     photoContainer.appendChild(img);
    //     images.push(img);
    // }
    lazyLoad();
}

function checkImageExists(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

function lazyLoad() {
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.getAttribute('data-src');
                observer.unobserve(image);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}


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
    await loadPhotos();
    animateOnScroll();
};


