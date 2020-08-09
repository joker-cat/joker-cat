jQuery(document).ready(function ($) {
    $('.slider1').slick({
        dots: false,
        infinite: true,
        speed: 500,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor:[$('.slider2'),$('.slider3'),$('.slider4')],
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        // nextArrow:'#buttonn',
        // prevArrow:'#buttonp',
        // responsive: [{
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 1
        //     }
        // },
        // ],
    });
    $('#buttonn').click(function(){

        $('.slider1').slick('slickNext');
        $('.slider2').slick('slickNext');
        $('.slider3').slick('slickNext');
        $('.slider4').slick('slickNext');
    });
    $('#buttonp').click(function(){

        $('.slider1').slick('slickPrev');
        $('.slider2').slick('slickPrev');
        $('.slider3').slick('slickPrev');
        $('.slider4').slick('slickPrev');
    });
    $('#buttonn_920').click(function(){
        $('.slider1').slick('slickNext');
    });
    $('#buttonp_920').click(function(){
        $('.slider1').slick('slickPrev');
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
            // responsive: [{
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1
            //     }
            // },
            // {
            //     breakpoint: 400,
            //     settings: {
            //         arrows: false,
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }]
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
            // responsive: [{
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1
            //     }
            // },
            // {
            //     breakpoint: 400,
            //     settings: {
            //         arrows: false,
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }]
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
            // responsive: [{
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1
            //     }
            // },
            // {
            //     breakpoint: 400,
            //     settings: {
            //         arrows: false,
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }]
        });

    $('#burger').click(function(){
        var a = document.body.offsetWidth;
        if(a > 920){
            $('#navbar').toggleClass('active');
        }else{
            $('#navbar').toggleClass('active_920');
        }
        
        
        if($('#burger>img').attr('src') == './index_img/burger.svg'){ 
            $('#burger>img').attr('src','./index_img/櫻花-10.png');
            $('#menu_container').css('opacity','1');
            $('#navbar_logo').css('opacity','1');
            $('#nav_allfont').css('opacity','1');
            $('#backtogo').css('display','none');
          
            // $('#nav_con').css('opacity','1');

        }else{
            $('#burger>img').attr('src','./index_img/burger.svg');
            $('#menu_container').css('opacity','0');
            $('#navbar_logo').css('opacity','0');
            $('#nav_allfont').css('opacity','0');
            $('#backtogo').css('display','block')

            // $('#nav_con').css('opacity','0');
            if(a > 920){
                $('#backtogo').css('display','block');
            }else{
                $('#backtogo').css('display','none');
            }

        }      
    }); 
}); 

    // jQuery(document).ready(function () {
    //     $(window).scroll(function (e) {
    //         parallaxScroll();
    //     });

    //     function parallaxScroll() {
    //         var scrolled = $(window).scrollTop();
    //         $('#container2_image1_set').css('top', (-20 - (scrolled * .03)) + 'px');
    //         $('#container2_image1').css('margin-bottom', (125 - (scrolled * .03)) + 'px');
    //         $('#container2_fontcon').css('margin-top', (0 + (scrolled * .04)) + 'px');
    //         $('#container2_fontcon').css('margin-bottom', (0 + (scrolled * .02)) + 'px');
            
    //         // $('#section2_content').css('margin-top', (0 + (scrolled * .06)) + 'px');
    //         // $('#section3_content').css('margin-top', (0 + (scrolled * .09)) + 'px');

    //         //   $('#parallax-bg-2').css('top',(0-(scrolled*.4))+'px');
    //         //   $('#parallax-bg-3').css('top',(0-(scrolled*.75))+'px');
    //     }
    // }); 


    $(document).ready(function(){
        $(document).snowfall({image:"./index_img/sakura/1.png", flakeCount:20, minSpeed:1, minSize:8, maxSize:15,});
        $(document).snowfall({image:"./index_img/sakura/1.png", flakeCount:20, minSpeed:1, minSize:8, maxSize:15,});
        $(document).snowfall({image:"./index_img/sakura/2.png", flakeCount:20, minSpeed:1, minSize:8, maxSize:15,});
        $(document).snowfall({image:"./index_img/sakura/4.png", flakeCount:20, minSpeed:1, minSize:8, maxSize:15,});
    });


        $('#backtogo').click(function(){
                $(window).scrollTop(0); 
            })

        jQuery(document).ready(function () {
            $(window).resize(function (e) {
                // 
                var a = document.body.offsetWidth;
                if(a>920 && $('#navbar').hasClass('active_920')){
                    $('#navbar').removeClass('active_920');
                    $('#navbar').addClass('active');
                }else if(a<=920 && $('#navbar').hasClass('active')){
                    $('#navbar').removeClass('active');
                    $('#navbar').addClass('active_920');
                }

            resize();
            });

            function resize() {
                var a = document.body.offsetWidth; //網頁顯示範圍
                var b = window.outerWidth; //瀏覽器範圍
                
                if(b>1920){
                    var c = (b-a)/2;
                    $('#navbar').css('right',c);
                    // console.log(c);
                }
                if(b<=1920){
                    var c = (b-a)/2;
                    $('#navbar').css('right',0);
                    // console.log(c);
                }
            }
        }); 