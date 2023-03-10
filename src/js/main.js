var button = document.querySelector('#button');
/* В документе document используем функцию querySelector, которая ищет 
определенный элемент с идентификатором #button. Это наша переменная button.*/

var modal = document.querySelector('#modal');

/* В документе document используем функцию querySelector, которая ищет 
определенный элемент с идентификатором #modal. Это наша переменная modal.*/

var close = document.querySelector('#close');

/* Это нужно, чтобы обращаться к элементам на странице - 
мы находим нужный элемент по идентификатору/классу/тегу и 
помещаем его в переменную, чтобы  js с ним мог работать */

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});
/* Отслеживание события в переменной button.
Функция addEventListener отслеживает события. 
Какое событие мы хотим отследить ('click'): клик. 
При клике запускается функция без имени function(тк тут нет имени),
которая {
    обращается к переменной modal, 
    с помощью функции classList ищет все классы блока modal, 
    а с помощью функции add добавляет блоку еще один класс modal_active
}*/ 

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});

/* При клике на кнопку с идентификатором #close 
запускается функция function(), которая в блоке с модальным окном ищет все классы, 
а потом удаляет у модального окна класс modal_active.
Поэтому при клике на крестик окно пропадает. */

/* Можно отслеживать наведение на кнопку, клик, скролл, нажатие на клавиатуре кнопки */

// Усложненное задание
/* setTimeout - срабатывает только один раз */
/* Вариант 1 */
/* const time = () => {
  modal.classList.remove('modal_active');
};

setTimeout(time, 7000); */

/* Вариант 2 */
/* setTimeout(
  () => {
  modal.classList.remove('modal_active');
}, 
  7000
); */

/* Вариант 3 */
/* setInterval - срабатывает циклично, постоянно (не нужно обновлять страницу) */
setInterval(
  () => modal.classList.remove('modal_active'),
  7000
);

/* Вариант 4 
Вместо 

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
}); 

задать функцию с именем modalClose

function modalClose() {
  modal.classList.remove('modal_active');
 }
 
 а потом использовать ее во всех других местах 
 
close.addEventListener('click', modalClose);

setTimeout(modalClose, 7000);  
или 
setInterval(modalClose, 7000);

 */