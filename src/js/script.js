//modules



@@include('burger.js');

@@include('datepicker-full.js');

@@include('just-validate.js');



window.addEventListener('DOMContentLoaded', function () {

    // menu

    if (window.innerWidth < 768) {
        burger.addEventListener('click', () => toggle(burger));
        items.forEach((item, i) => { item.addEventListener('click', () => toggle(item)) });
    };

    //validator

    new window.JustValidate('.form-js', {
        rules: {
            emailSubmit: {
                required: true,
                email: true
            },
        }
    });

    //datepicker


    const elem = document.getElementById('foo');
    const rangepicker = new DateRangePicker(elem, {
        language: 'uk'
    });

    //scroll

    const btn = document.querySelector('.js-btn_scroll'),
        block = document.querySelector('.js-block');

    function scroll() {
        block.scrollIntoView({ block: "center", behavior: "smooth" })
    };
    btn.addEventListener('click', scroll);

    //google autocomplete

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-37.966667, -156.283333),
        new google.maps.LatLng(-37.966667, -156.283333));

    var input = document.getElementById('searchTextField');
    var options = {
        bounds: defaultBounds,
        types: ['establishment']
    };

    autocomplete = new google.maps.places.Autocomplete(input, options);

});

