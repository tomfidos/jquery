$('.titleText').each(function() {
    $(this).click(function() {
        const itemId = $(this).attr('id').slice(-1);
        $('#hiddenText' + itemId).toggle(500);
        exchangePlusAndMinus('#sign' + itemId)
    });
});

const exchangePlusAndMinus = (signId) => {
    const text = $(signId).text();
    if (text === '+') {
        $(signId).text('-');
    } else {
        $(signId).text('+');
    }
}
