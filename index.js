$(document).ready(function() {

    let noOfCards = $('.cardContainer').children().length;
    let arr = Array.from({length: noOfCards},(_,i) => i+1);
    
    //function for Shuffle button
    $('#Shuffle').on('click',function () {
        //$('.cardContainer > div').each(function () {
        //    let randomOrder = Math.floor(Math.random()*9)+1;
        //    $(this).css('order',randomOrder);
        //})
        let shuffledArray = [...arr];
        for (let i = 0; i < noOfCards; i++) {
            const j = Math.floor(Math.random() * noOfCards);
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        console.log(shuffledArray);

        arrangeCards(shuffledArray);
    })

    //function for Sort button
    $('#Sort').on('click',function () {
        //$('.cardContainer > div').each(function () {
        //    $(this).removeAttr('style');
        //})
        arrangeCards(arr);
    })

    function arrangeCards(arr) {
        $('.cardContainer > div').each(function (i) {
            $(this).text(arr[i])
        })
    }
})