if (window.innerWidth < 768) {

    //burger menu

    const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        body = document.querySelector('body'),
        items = document.querySelectorAll('.menu__item'),
        jsBody = document.querySelectorAll('.js-menu__body');



    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        body.classList.toggle('is-active');
        jsBody.forEach(function (item, i) {
            item.classList.remove('is-active')
        })

    })
    items.forEach(function (item, i) {
        item.addEventListener('click', function () {
            if (!item.classList.contains('js-menu')) {
                menu.classList.toggle('is-active');
                burger.classList.toggle('is-active');
                body.classList.toggle('is-active');
                console.log('piu')

            }
            jsBody.forEach(function (r, i) {
                r.classList.remove('is-active')
            })
        });
    });
};