var swiperindex1 = new Swiper('.swiper-container', {
    loop: true,
    parallax: true,
    slidesPerView: 1,

});
swiperindex1.on('slideChangeTransitionStart', function () {

    selectcolor(swiperindex1.realIndex + 1);
    //  console.log(swiperindex1.realIndex+1);
});

function selectcolor(a) {

    switch (a) {
        case 1:
            $('#Middle_section5').css('background', '#AAB9C7');
            break;
        case 2:
            $('#Middle_section5').css('background', '#A9D2CD');
            break;
        case 3:
            $('#Middle_section5').css('background', '#E2A39A');
            break;
        case 4:
            $('#Middle_section5').css('background', '#EAC39A');
            break;
        case 5:
            $('#Middle_section5').css('background', '#FEEEE3');
            break;
        case 6:
            $('#Middle_section5').css('background', '#B9D1AA');
            break;
        case 7:
            $('#Middle_section5').css('background', '#9AE0E5');
            break;
    }
}
$('#burger').click(function () {
    $('#navbar').toggleClass('active');

    if ($('#burger>img').attr('src') == './index_A_img/burger.svg') {
        $('#burger>img').attr('src', './index_A_img/櫻花-10.png');
        $('#menu_container').css('opacity', '1');
        $('#backtogo').css('display','none');

    } else {
        $('#burger>img').attr('src', './index_A_img/burger.svg');
        $('#menu_container').css('opacity', '0');
        $('#backtogo').css('display','block');
    }
}); 