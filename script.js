document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });
});

// Получаем ссылку и выпадающее меню
const navCredits = document.querySelector('.nav__credits');
const dropdownContent = navCredits.nextElementSibling; // Следующий элемент после ссылки, который является списком

// При клике на ссылку показываем или скрываем меню
navCredits.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    dropdownContent.classList.toggle('show'); // Переключаем класс 'show'
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
    if (!navCredits.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show'); // Убираем класс 'show', если клик вне меню
    }
});
