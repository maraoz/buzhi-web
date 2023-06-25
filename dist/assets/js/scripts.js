
(function($) {
    var allfunction = {
        //=============== Menu ==============
        toggleMenu: function() {
            $(this).toggleClass('opened')
            $('.main-menu').toggleClass('mobile-menu-active')
            $("body").toggleClass('menu-body')
        },
        menu_toggle_setup: function() {
            $('.hamburger').on('click', this.toggleMenu);
            $('.nav li a').on('click', this.toggleMenu);
        },
        init: function() {
            allfunction.menu_toggle_setup()
        },
    }

    $(document).ready(function() {
        allfunction.init();
    });
    
})(jQuery);

anime({
    targets: '.banner-text-underline path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

anime({
    targets: '#discover-light path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});
anime({
    targets: '#exprienct-txt-shape path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 10000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});
