$('#burger').click(function () {
    $('#navbar').toggleClass('active');

    if ($('#burger>img').attr('src') == './index_C_img/burger.png') {
        $('#burger>img').attr('src', './index_C_img/櫻花-10.png');
        $('#menu_container').css('opacity', '1');

    } else {
        $('#burger>img').attr('src', './index_C_img/burger.png');
        $('#menu_container').css('opacity', '0');
    }
}); 