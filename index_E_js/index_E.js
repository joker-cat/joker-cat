$('#burger').click(function () {
    $('#navbar').toggleClass('active');

    if ($('#burger>img').attr('src') == './index_E_img/burger.svg') {
        $('#burger>img').attr('src', './index_E_img/櫻花-10.png');
        $('#menu_container').css('opacity', '1');
        $('#backtogo').css('display','none');

    } else {
        $('#burger>img').attr('src', './index_E_img/burger.svg');
        $('#menu_container').css('opacity', '0');
        $('#backtogo').css('display','block');
    }
}); 