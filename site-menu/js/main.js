$('#title').click(() => {
    $('#list').toggleClass('open');
});

$('.link').each(function() {
    $(this).click(function() {
        $('body').fadeOut(1000);
    });
});