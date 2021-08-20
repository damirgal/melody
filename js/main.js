$(document).ready(function () {
    var currentFloor = 2; // переменная для хранения текущего этажа
    var counterUp = $(".counter-up"); // кнопка увеличения этажа
    var counterDown = $(".counter-down"); // кнопка уменьшения этажа
    var floorPath = $(".home-image path"); // каждый отдельный этаж
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    var flatPath = $(".modal-image path"); // каждая отдельная квартира
    var flatList = $(".flat-list a"); //список квартир

    //var flatPath2 = $(".modal-image path"); //список квартир
    
    

    // функция при наведении указателя мыши на этаж
    floorPath.on("mouseover", function(){
        floorPath.removeClass("current-floor"); // удаление активного класса у этажа
        currentFloor = $(this).attr("data-floor"); // получаем значение у текущего этажа
        $(".counter").text(currentFloor); // записываем номер этажа в счетчик
    });

    floorPath.on("click", toggleModal); /* при клике на этаж, открыть окно */
    modalCloseButton.on("click", toggleModal); /* при клике на кнопку закрыть, закрыть окно */
    viewFlatsButton.on("click", toggleModal); /* при клике на кнопку, открывать модальное окно */



    counterUp.on("click", function() { // отслеживаем кклик по кнопке вверх
        if (currentFloor < 18) { // проверяем значение этажа, не больше 18
        currentFloor++; // прибваляем этаж
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем при выводе, добавляем 0 перед номером этажа
        $(".counter").text(usCurrentFloor); // записываем в счетчик номер этажа
        floorPath.removeClass("current-floor"); // удаляем активный класс у всех этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // добавляем активный класс для текущего этажа, подсвечивем текущий этаж
        }
        
    })
    

    counterDown.on("click", function() {
        if (currentFloor > 2) {
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
        
    })

    function toggleModal(){ // функция открыть/закрыть окно
        modal.toggleClass('is-open');
    }

    // функция при наведении указателя мыши на квартиру
    flatPath.on("mouseover", function(){
        flatList.removeClass("current-flat"); // удаление активного класса у кватриры
        currentFlat = $(this).attr("data-flat"); // получаем значение у текущей квартиры
        $(`[id=${currentFlat}]`).toggleClass('current-flat'); // выделяем жирным выбранную квартиру справа
    });

    // функция при наведении указателя мыши на список квартир
    flatList.on("mouseover", function(){
        flatList.removeClass("current-flat"); // удаление активного класса у кватриры
        flatPath.removeClass("current-flat2"); // удаление активного класса у кватриры
        currentFlat = $(this).attr("id"); // получаем значение у текущей квартиры из списка
        $(`[data-flat=${currentFlat}]`).addClass('current-flat2'); // выделяем выбранную квартиру
    });

});