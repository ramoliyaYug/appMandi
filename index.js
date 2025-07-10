// script.js - AppMandi Homepage JavaScript

// App data - easily extensible for new apps
const apps = [
    {
        id: 'quicknotes',
        name: 'QuickNotes Pro',
        icon: '📝',
        description: 'Sabse fast note-taking app! Lightweight, ad-free, aur bilkul simple. Perfect for students aur professionals.',
        version: 'v1.2.0',
        size: '2.5 MB',
        downloadUrl: 'ChugliHub/assets/apk/chuglihub.apk',
        pageUrl: 'ChugliHub/chugliHub.html',
        featured: true
    },
    {
        id: 'groupnote',
        name: 'Group Note App',
        icon: '👥',
        description: 'Collaborate with friends and colleagues on shared notes. Real-time updates, easy sharing, and perfect for team projects.',
        version: 'v1.1.0',
        size: '3.2 MB',
        downloadUrl: 'GroupNoteApp/assets/apk/groupnoteapp.apk',
        pageUrl: 'GroupNoteApp/groupNoteApp.html',
        featured: true
    },
    {
        id: 'levelup',
        name: 'Level Up',
        icon: '🎮',
        description: 'Turn your daily tasks into a game! Earn points, level up, and stay motivated while completing your to-do list.',
        version: 'v2.0.1',
        size: '4.1 MB',
        downloadUrl: 'LevelUp/assets/apk/levelup.apk',
        pageUrl: 'LevelUp/levelUp.html',
        featured: true
    },
    {
        id: 'projectsync',
        name: 'Project Sync',
        icon: '🔄',
        description: 'Manage your projects efficiently with this lightweight project management tool. Track tasks, deadlines, and progress.',
        version: 'v1.3.2',
        size: '3.8 MB',
        downloadUrl: 'ProjectSync/assets/apk/projectsync.apk',
        pageUrl: 'ProjectSync/projectSync.html',
        featured: false
    },
    {
        id: 'quantumchat',
        name: 'Quantum Chat',
        icon: '💬',
        description: 'Secure messaging app with end-to-end encryption. Fast, reliable, and privacy-focused for all your conversations.',
        version: 'v2.1.0',
        size: '5.2 MB',
        downloadUrl: 'QuantumChat/assets/apk/quantumchat.apk',
        pageUrl: 'QuantumChat/quantumChat.html',
        featured: true
    },
    {
        id: 'vmm',
        name: 'Vishal Mega Mart',
        icon: '🛒',
        description: 'Shop smarter with the unofficial Vishal Mega Mart companion app. Compare prices, find deals, and create shopping lists.',
        version: 'v1.0.3',
        size: '4.5 MB',
        downloadUrl: 'VishalMegaMartApp/assets/apk/vishalmegamartguardtestapp.apk',
        pageUrl: 'VishalMegaMartApp/vmmApp.html',
        featured: false
    },
    {
        id: 'weather',
        name: 'Weather App',
        icon: '🌦️',
        description: 'Simple and accurate weather forecasts with beautiful visualizations. Plan your day with confidence!',
        version: 'v1.5.0',
        size: '3.0 MB',
        downloadUrl: 'WeatherApp/assets/apk/weatherapp.apk',
        pageUrl: 'WeatherApp/weatherApp.html',
        featured: true
    },
    {
        id: 'zenity',
        name: 'Zenity',
        icon: '🧘',
        description: 'Mindfulness and meditation app to help you relax, focus, and sleep better. Take a break from the digital chaos.',
        version: 'v2.2.1',
        size: '6.3 MB',
        downloadUrl: 'Zenity/assets/apk/zenity.apk',
        pageUrl: 'Zenity/zenity.html',
        featured: false
    }
];

// Statistics counters
let stats = {
    appsCount: 8,
    downloadsCount: 42,
    coffeeCount: '∞'
};

// DOM elements
let appsGrid;
let statsElements = {};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    renderApps();
    updateStats();
    initializeAnimations();
    initializeEventListeners();

    // Add some fun console messages
    console.log('🏪 Welcome to AppMandi!');
    console.log('👨‍💻 Built with love and lots of chai!');
    console.log('🎯 Looking for the source code? Check the elements!');
});

// Initialize DOM elements
function initializeElements() {
    appsGrid = document.getElementById('apps-grid');
    statsElements = {
        appsCount: document.getElementById('apps-count'),
        downloadsCount: document.getElementById('downloads-count'),
        coffeeCount: document.getElementById('coffee-count')
    };
}

// Render apps in the grid
function renderApps() {
    if (!appsGrid) return;

    appsGrid.innerHTML = '';

    apps.forEach(app => {
        const appCard = createAppCard(app);
        appsGrid.appendChild(appCard);
    });
}

// Create individual app card
function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card fade-in';
    card.setAttribute('data-app-id', app.id);

    card.innerHTML = `
        <div class="app-icon">${app.icon}</div>
        <h3 class="app-title">${app.name}</h3>
        <p class="app-description">${app.description}</p>
        <div class="app-meta">
            <span class="app-version">${app.version}</span>
            <span class="app-size">${app.size}</span>
        </div>
        <div class="app-buttons">
            <a href="${app.downloadUrl}" class="btn-small btn-download" onclick="trackDownload('${app.id}')">
                📥 Download APK
            </a>
            <a href="${app.pageUrl}" class="btn-small btn-info">
                📱 View Details
            </a>
        </div>
    `;

    // Add hover effects
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });

    return card;
}

// Update statistics with animation
function updateStats() {
    if (statsElements.appsCount) {
        animateCounter(statsElements.appsCount, 0, stats.appsCount, 1000);
    }

    if (statsElements.downloadsCount) {
        animateCounter(statsElements.downloadsCount, 0, stats.downloadsCount, 2000);
    }

    if (statsElements.coffeeCount) {
        statsElements.coffeeCount.textContent = stats.coffeeCount;
        statsElements.coffeeCount.classList.add('bounce');
    }
}

// Animate counter numbers
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;

    function step(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);

        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// Initialize scroll animations
function initializeAnimations() {
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

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Add floating animation to emojis
    document.querySelectorAll('.floating-emoji').forEach((emoji, index) => {
        emoji.style.animationDelay = `${index * 0.5}s`;
    });
}

// Track app downloads
function trackDownload(appId) {
    console.log(`App download tracked: ${appId}`);
    stats.downloadsCount++;
    if (statsElements.downloadsCount) {
        animateCounter(statsElements.downloadsCount, 
            parseInt(statsElements.downloadsCount.textContent), 
            stats.downloadsCount, 
            500);
    }
}

// Initialize event listeners
function initializeEventListeners() {
    // Add event listeners for app cards hover effects
    document.querySelectorAll('.app-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add event listener for the stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        window.addEventListener('scroll', function() {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                statsSection.querySelectorAll('.stat-number').forEach(stat => {
                    stat.classList.add('bounce');
                });
            }
        });
    }
}

// Scroll to apps section
function scrollToApps() {
    const appsSection = document.getElementById('apps');
    if (appsSection) {
        appsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show about section
function showAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}
