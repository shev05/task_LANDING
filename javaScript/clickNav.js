function initNavigation() {
    const navLinks = document.querySelectorAll('.main-header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const checkHeader = setInterval(() => {
        if (document.querySelector('.main-header nav a')) {
            clearInterval(checkHeader);
            initNavigation();
        }
    }, 100);
});