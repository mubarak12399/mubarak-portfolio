document.addEventListener('DOMContentLoaded', function() {
    // মেনু টগল ফাংশনালিটি
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // ফুটারের বছর স্বয়ংক্রিয়ভাবে আপডেট করা
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // ন্যাভিগেশন লিঙ্ক ক্লিক করলে মেনু হাইড করা (মোবাইলের জন্য)
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});