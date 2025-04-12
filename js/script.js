const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

function toggleSidebar() {
    const isOpen = sidebar.classList.contains("open");
    if (isOpen) {
        sidebar.classList.remove("open");
        overlay.style.display = "none";
    } else {
        sidebar.classList.add("open");
        overlay.style.display = "block";
    }
}

openBtn.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);




// dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown-header');

    // Открытие/закрытие при клике на заголовок
    header.addEventListener('click', (e) => {
        e.stopPropagation(); // не передаём клик вверх
        dropdown.classList.toggle('open');
    });
});

// Закрытие всех при клике вне любого
document.addEventListener('click', () => {
    dropdowns.forEach(drop => drop.classList.remove('open'));
});