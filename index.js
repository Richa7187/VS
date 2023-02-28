$(document).ready(function() {
    //function for Shuffle button
    $('#Shuffle').on('click',function () {
        $('.cardContainer > div').each(function () {
            let randomOrder = Math.floor(Math.random()*9)+1;
            $(this).css('order',randomOrder);
        })
    })

    //function for Sort button
    $('#Sort').on('click',function () {
        $('.cardContainer > div').each(function () {
            $(this).removeAttr('style');
        })
    })
})