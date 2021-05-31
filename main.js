$('document').ready(function(){
    $('#home #open').click(function(){
        $('#home nav').addClass('showNav')
    })
    $('#home #close').click(function(){
        $('#home nav').removeClass('showNav')
    })

    $('#num').css({
        cursor: 'pointer'
    })
    $('#num').click(function(){
        $(this).text('+212 32 333 2222')
    })
})