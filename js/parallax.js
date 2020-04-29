$(window).scroll(function() {
    let scrollOffset = $(window).scrollTop();
    $('.parallax-bg').css('background-position', 'center ' + (scrollOffset * 0.05) + 'px');
});