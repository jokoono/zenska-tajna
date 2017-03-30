$(document).ready(function () {
    var w = $(window).innerWidth();
    $(window).resize(function () {
        w = $(window).innerWidth();

    });
    $('.navbar .dropdown > a').click(function (e) {
        e.preventDefault();
        if (w < 768) {
//            $('.dropdown-menu').slideUp();
//            $(this).next('.dropdown-menu').slideToggle();
            if($(this).next().hasClass('active')){
                $(this).next().removeClass('active');
                $(this).next().slideUp();
            }else{
                $('.dropdown-menu').removeClass('active');
                $('.dropdown-menu').slideUp();
                $(this).next('.dropdown-menu').addClass('active');
                $(this).next('.dropdown-menu').slideDown();
            }
        }
    });
});