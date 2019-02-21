$(function() {
    $('.change-eaten').on('click', function(event) {
        let id = $(this).data('id');
        let eaten = $(this).data('eaten');

        let eatenState = {
            devoured: 1
        };

        // Send the PUT request
        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: eatenState
        }).then(
            function() {
                console.log(`Changed devoured to ${eaten}`);
                location.reload();
            }
        );
    });

    $('.create-form').on('submit', function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#brgr').val().trim(),
        };

        // Send the POST request
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log('Created a new burger');
                location.reload();
            }
        );
    });
});