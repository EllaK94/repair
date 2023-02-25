/* Это Вариант 4 из main.js */

var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});

/* Создаем функцию modalClose, которая убирает класс modal_active*/
function modalClose() {
    modal.classList.remove('modal_active');
};

/* При клике срабатывает наша функция modalClose */
close.addEventListener('click', modalClose);

/* Через 5с после открытия модального окна, срабатывает функция modalClose */
setInterval(modalClose, 7000);