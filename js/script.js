// Function to load sections dynamically
function loadSection(section) {
    fetch(`${section}.html`)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
            if (section === 'home') initSlideshow(); // Initialize slideshow only for Home section
        })
        .catch(error => console.error('Error loading section:', error));
}

// Slideshow function
function initSlideshow() {
    const images = document.querySelectorAll(".slideshow-image");
    let currentIndex = 0;

    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex); // Show the first image
    setInterval(nextSlide, 3000); // Set interval to change slides
}

// Load the home section by default
document.addEventListener('DOMContentLoaded', () => loadSection('home'));
