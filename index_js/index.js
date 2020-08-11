jQuery(document).ready(function ($) {
    $('.slider1').slick({
        dots: false,
        infinite: true,
        speed: 500,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: [$('.slider2'), $('.slider3'), $('.slider4')],
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
    });
    $('.slider2').slick({
        dots: false,
        infinite: true,
        draggable: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
    });

    $('.slider3').slick({
        dots: false,
        infinite: true,
        draggable: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
    });

    $('.slider4').slick({
        dots: false,
        infinite: true,
        draggable: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
    });
    $('#buttonn').click(function () {

        $('.slider1').slick('slickNext');
        $('.slider2').slick('slickNext');
        $('.slider3').slick('slickNext');
        $('.slider4').slick('slickNext');
    });
    $('#buttonp').click(function () {

        $('.slider1').slick('slickPrev');
        $('.slider2').slick('slickPrev');
        $('.slider3').slick('slickPrev');
        $('.slider4').slick('slickPrev');
    });
    $('#buttonn_920').click(function () {
        $('.slider1').slick('slickNext');
    });
    $('#buttonp_920').click(function () {
        $('.slider1').slick('slickPrev');
    });



    $('#burger').click(function () {
        var a = document.body.offsetWidth;
        var b = window.innerHeight; //抓取網頁可見高度
        
        //a = a + 17;  //包含右方滾軸17px

        if (a > 920) {
            $('#navbar').toggleClass('active');
        } else {
            $('#navbar').toggleClass('active_920');
        }

        if ($('#burger>img').attr('src') == './index_img/burger.svg') {
            $('#burger>img').attr('src', './index_img/櫻花-10.png');
            $('#menu_container').css('opacity', '1');
            $('#navbar_logo').css('opacity', '1');
            $('#nav_allfont').css('opacity', '1');
            $('#backtogo').css('display', 'none');

        } else {
            $('#burger>img').attr('src', './index_img/burger.svg');
            $('#menu_container').css('opacity', '0');
            $('#navbar_logo').css('opacity', '0');
            $('#nav_allfont').css('opacity', '0');
            $('#backtogo').css('display', 'block');
            if (a <= 920) {
                $('#backtogo').css('display', 'none');
            }
        }


    // 判斷手機方向：
    //     window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    //         // if (window.orientation === 180 || window.orientation === 0) {
                
    //         // }
    //         if (window.orientation === 90 || window.orientation === -90 ){
    //             console.log(123);
    //             $('#nav_allfont').css('opacity','0');
    //         }
    //      }, false);
    });
});

$(document).ready(function () {
    $(document).snowfall({ image: "./index_img/sakura/1.png", flakeCount: 20, minSpeed: 1, minSize: 8, maxSize: 15, });
    $(document).snowfall({ image: "./index_img/sakura/1.png", flakeCount: 20, minSpeed: 1, minSize: 8, maxSize: 15, });
    $(document).snowfall({ image: "./index_img/sakura/2.png", flakeCount: 20, minSpeed: 1, minSize: 8, maxSize: 15, });
    $(document).snowfall({ image: "./index_img/sakura/4.png", flakeCount: 20, minSpeed: 1, minSize: 8, maxSize: 15, });
});


$('#backtogo').click(function () {
    $(window).scrollTop(0);
})

jQuery(document).ready(function () {

    $(window).resize(function (e) {
        var b = window.innerHeight; //抓取網頁可見高度
        var a = document.body.offsetWidth;   
        //a = a + 17;  //包含右方滾軸17px

        //console.log(a);
        // console.log(b);

        if(b > 770 && $('#navbar').hasClass('active')){
            $('#nav_allfont').css('opacity','1');
        }

        if(b <= 770 && $('#navbar').hasClass('active_920')){
            $('#nav_allfont').css('opacity','1');
        }

        if(a > 920 && $('#navbar').hasClass('active')){
            $('#backtogo').css('display', 'none');
        }

        if(a > 920){
            $('#backtogo').css('display', 'none');
        }
        if(a <= 920 && $('#navbar').hasClass('')){
            $('#backtogo').css('display', 'none');
        }
        if(a <= 920){
            $('#backtogo').css('display', 'none');
        }
        if(a > 920 && $('#navbar').hasClass('')){
            $('#backtogo').css('display', 'block');
        }

        if (a > 920 && $('#navbar').hasClass('active_920')) {
            $('#navbar').removeClass('active_920');
            $('#navbar').addClass('active');
            $('#nav_allfont').css('opacity','1');
        }
        if (a <= 920 && $('#navbar').hasClass('active')) {
            $('#navbar').removeClass('active');
            $('#navbar').addClass('active_920');
            $('#backtogo').css('display', 'none');
            $('#nav_allfont').css('opacity','1');
        }

        resize();
    });

    function resize() {
        var a = document.body.offsetWidth; //網頁顯示範圍
        var b = window.outerWidth; //瀏覽器範圍

        if (b > 1920) {
            var c = (b - a) / 2;
            $('#navbar').css('right', c);

        }
        if (b <= 1920) {
            var c = (b - a) / 2;
            $('#navbar').css('right', 0);

        }
    }
}); 