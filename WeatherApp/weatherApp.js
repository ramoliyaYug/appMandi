// SkyCast App Page JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("SkyCast app page loaded");

    // Initialize any interactive elements
    initializeEventListeners();
});

// Initialize event listeners
function initializeEventListeners() {
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Track download clicks
    const downloadButtons = document.querySelectorAll('#download-btn, #main-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Download clicked');
            // You could add analytics tracking here
        });
    });
}

// Share the app
function shareApp() {
    // Check if Web Share API is supported
    if (navigator.share) {
        navigator.share({
            title: 'SkyCast - AppMandi',
            text: 'Check out this awesome weather app!',
            url: window.location.href
        })
            .then(() => console.log('Share successful'))
            .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that don't support the Web Share API
        alert('Share this link: ' + window.location.href);
    }
}

// Copy download link
function copyDownloadLink() {
    const downloadLink = window.location.origin + '/appMandi/WeatherApp/assets/apk/weatherapp.apk';

    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = downloadLink;
    document.body.appendChild(tempInput);

    // Select and copy the link
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary element
    document.body.removeChild(tempInput);

    // Show feedback to the user
    alert('Download link copied to clipboard!');
}
