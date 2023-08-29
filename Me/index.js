var mobileMenuIcon = document.querySelector(".mobile-menu-icon");
var mobileMenu = document.querySelector(".group-icons ul");

function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
    mobileMenuIcon.classList.toggle("active");
}

function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    mobileMenuIcon.classList.remove("active");
}

// Close the menu when clicking outside of it
document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !mobileMenuIcon.contains(event.target)) {
        closeMobileMenu();
    }
});
