var mobileMenuIcon = document.querySelector(".mobile-menu-icon");
var mobileMenu = document.querySelector(".group-icons ul");
var closemenu = document.querySelector(".close-menu");

function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
    mobileMenuIcon.classList.toggle("active");
    closemenu.classList.toggle("active");
}

function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    mobileMenuIcon.classList.remove("active");
    closemenu.classList.remove("active");
}

// Close the menu when clicking outside of it
document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !closemenu.contains(event.target)) {
        closeMobileMenu();
    }
});

// Toggle the menu when clicking the hamburger menu or the close button
closemenu.addEventListener("click", closeMobileMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
