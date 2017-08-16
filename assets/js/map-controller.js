ymaps.ready(init);
var myMap;

function init () {
    myMap = new ymaps.Map('map', {

        center: [47.221347, 38.917358],
        zoom: 13,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Альянс'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'content/locator.png',
        iconImageSize: [49, 69],
        iconImageOffset: [0, -69]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable(['drag', 'scrollZoom']);
}
