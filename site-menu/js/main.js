$('#title').click(() => {
    $('#list').toggleClass('open');
});

$('.directLink').each(function() {
    $(this).click(function(event) {
        event.preventDefault();
        $('body').fadeOut(2000, function() {
            window.location.href = $(event.target).attr('href');
        });
    });
});