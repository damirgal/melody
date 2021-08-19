$(document).ready(function () {
    var currentFloor = 2; // переменная для хранения текущего этажа
    var counterUp = $(".counter-up"); // кнопка увеличения этажа
    var counterDown = $(".counter-down"); // кнопка уменьшения этажа
    var floorPath = $(".home-image path"); // каждый отдельный этаж

    // функция при наведении указателя мыши на этаж
    floorPath.on("mouseover", function(){
        floorPath.removeClass("current-floor"); // удаление активного класса у этажа
        currentFloor = $(this).attr("data-floor"); // получаем значение у текущего этажа
        $(".counter").text(currentFloor); // записываем номер этажа в счетчик
    });

    counterUp.on("click", function() { // отслеживаем кклик по кнопке вверх
        if (currentFloor < 18) { // проверяем значение этажа, не больше 18
        currentFloor++; // прибваляем этаж
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем при выводе, добавляем 0 перед номером этажа
        $(".counter").text(usCurrentFloor); // записываем в счетчик номер этажа
        floorPath.removeClass("current-floor") // удаляем активный класс у всех этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // добавляем активный класс для текущего этажа, подсвечивем текущий этаж
        }
        
    })
    

    counterDown.on("click", function() {
        if (currentFloor > 2) {
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor")
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
        
    })



});