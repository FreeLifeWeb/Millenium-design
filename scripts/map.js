if (typeof ymaps !== 'undefined') {
    ymaps.ready(init);
} else {
    console.error('Ошибка: Yandex Maps API не загрузился. Проверьте API-ключ.');
}

function init() {
    const myMap = new ymaps.Map('map', {
        center: [55.730183, 37.592446], //координаты
        zoom: 15,
    });

    const myPlacemark = new ymaps.Placemark([55.730183, 37.592446], {
        balloonContent: 'г. Москва, Фрунзенская набережная д.16 к.1', //адрес и описание
    });

    myMap.geoObjects.add(myPlacemark);
}
