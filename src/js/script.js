window.addEventListener('DOMContentLoaded', function () {
    //menu
    @@include('menu.js');
    @@include('burger.js');

    //validator
    @@include('just-validate.js');
    new window.JustValidate('.form-js', {
        rules: {

            emailSubmit: {
                required: true,
                email: true
            },
        }
    });
    //datepicker
    @@include('datepicker-full.js');
    const elem = document.getElementById('foo');
    const rangepicker = new DateRangePicker(elem, {

        language: 'uk'

    });

    const btn = document.querySelector('.js-btn_scroll'),
        block = document.querySelector('.js-block');

    function scroll() {
        block.scrollIntoView({ block: "center", behavior: "smooth" })
    };
    btn.addEventListener('click', scroll);










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






