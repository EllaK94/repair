$(document).ready(function() { // Проверяем, загрузилось ли дерево страницы, и если да - запускаем функцию
  var button = $('#button'); // Вместо var button = document.querySelector('#button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function() { // on - отлавливает клик, и запускает функцию: 
    modal.addClass('modal_active');
  });
  close.on('click', function() {
    modal.removeClass('modal_active');
  });
});