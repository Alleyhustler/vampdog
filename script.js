document.addEventListener('DOMContentLoaded', function () {
    // Select the bottom section and bottom image
    const bottomSection = document.querySelector('.bottom-section');
    const bottomImg = document.querySelector('.bottom-img');

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class to trigger the animation
                bottomImg.classList.add('animate');
                // Stop observing once the animation has started
                observer.unobserve(bottomSection);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is in view
    });

    // Start observing the bottom section
    observer.observe(bottomSection);
});

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const floatingImages = document.querySelectorAll('.floating-img');

    floatingImages.forEach(img => {
        const startTop = Math.random() * 100; // Random top position between 0% and 100%
        const startLeft = Math.random() * 100; // Random left position between 0% and 100%

        img.style.top = `${startTop}%`;
        img.style.left = `${startLeft}%`;
    });
});
