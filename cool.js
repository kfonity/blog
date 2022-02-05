// Выбираем кнопку
const btn = document.querySelector('.btn-toggle');
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function() {
    document.body.classList.toggle('darkTheme');
})