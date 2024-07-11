const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
    document.body.classList.toggle('menu-active');
});


const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselContainer = document.querySelector('.carousel-container');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));

let currentIndex = 0;

function updateCarousel() {
    const width = slides[currentIndex].clientWidth;
    carouselContainer.style.transform = `translateX(${-currentIndex * width}px)`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Optional: Automatically change slides every 5 seconds
setInterval(showNextSlide, 5000);

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (In a real application, you'd need to validate on the server-side as well)
    if (username === 'admin' && password === 'password') {
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});