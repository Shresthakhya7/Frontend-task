//Header section 
document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('searchInput');
    const searchIcon = document.getElementById('searchIcon');
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.querySelector('.option');
    const hideIcon = document.getElementById('hideIcon');
    const resourceLink = document.querySelector('.resource');
    const resourceBox = document.querySelector('.resource-box');

    // Function to hide both containers
    function hideBothContainers() {
        searchContainer.style.display = 'none';
        resourceBox.style.display = 'none';
    }

    // Toggle search container visibility
    searchToggle.addEventListener('click', function() {
        if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
            hideBothContainers();
            searchContainer.style.display = 'block';
        } else {
            searchContainer.style.display = 'none';
        }
    });

    // Hide search icon when input is not empty
    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            searchIcon.classList.add('hidden');
        } else {
            searchIcon.classList.remove('hidden');
        }
    });

    // Hide search container when hide icon is clicked
    hideIcon.addEventListener('click', function() {
        searchContainer.style.display = 'none';
    });

    // Toggle resource box visibility
    resourceLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (resourceBox.style.display === 'block') {
            resourceBox.style.display = 'none';
        } else {
            hideBothContainers();
            resourceBox.style.display = 'block';
        }
    });
});

//Scroll To Top
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTop = document.getElementById('scrollToTop');

    // Add click event listener to the button
    scrollToTop.addEventListener('click', function() {
        // Scroll smoothly to the top of the page
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
    });
});

//Carouseldocument.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-items');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarouselWidth() {
        const itemWidth = carouselItems[0].offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Set initial position of carousel
    updateCarouselWidth();

    // Function to show slide
    function showSlide(index) {
        if (index < 0) {
            index = totalItems - 1;
        } else if (index >= totalItems) {
            index = 0;
        }
        currentIndex = index;
        const itemWidth = carouselItems[0].offsetWidth;
        const offset = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Event listeners for prev and next buttons
    prev.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    next.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Update itemWidth and carouselWidth on window resize
    window.addEventListener('resize', function() {
        updateCarouselWidth();
    });

