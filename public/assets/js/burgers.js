$('#createNewBurgerButton').on('click', function(){
    var input = $('#newBurger').val().trim()
    if(input !== "" && input.length <=35){
        var newBurger = input;
        event.preventDefault();

        $.ajax('/api/newBurger', {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log('created new burger');
            location.reload();
        })
    };    
})

$('.eatIt').on('click', function(){
    $.ajax("/api/newBurger/" + $(this).attr('id'), {
        type: "PUT"
    }).then(function(){
        location.reload();
    })
})





