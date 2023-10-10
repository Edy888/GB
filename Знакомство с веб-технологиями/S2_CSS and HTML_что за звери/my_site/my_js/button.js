window.onload = function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-300px';
}



document.getElementById('menuButton').addEventListener('click', function(event) {
    var menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }

    // Предотвращаем всплытие события, чтобы оно не достигло слушателя на document
    event.stopPropagation();
});

document.addEventListener('click', function() {
    var menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
});



document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    sidebar.style.left = '0';
    this.style.display = 'none';
    document.getElementById('closeSidebar').style.display = 'block';
    overlay.style.display = 'block';  // показываем оверлей
});

document.getElementById('closeSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    sidebar.style.left = '-250px';
    this.style.display = 'none';
    document.getElementById('toggleSidebar').style.display = 'block';
    overlay.style.display = 'none';  // скрываем оверлей
});

// также скрываем оверлей, когда кликаем по нему
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('closeSidebar').click();  // имитируем клик по кнопке закрытия
});

