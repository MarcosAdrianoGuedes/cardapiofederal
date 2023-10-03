// Lógica JavaScript aqui

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleZoom(element) {
    element.classList.toggle('zoom-in');
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.section-button');

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const sectionId = button.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });

    const scrollButton = document.querySelector('.scroll-to-top');
    scrollButton.addEventListener('click', scrollToTop);

    const containers = document.querySelectorAll('.container');
    containers.forEach((container) => {
        container.addEventListener('click', function () {
            toggleZoom(this);
        });
    });
});

function openInstagramProfile() {
    window.location.href = "https://www.instagram.com/federalbsb/";
}
