$(document).ready(function () {
    $(".addBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
            burger_name: $("#b_name").val().trim(),
            devoured: false
        };
        // Send the POST request.
        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            });
    });

    $(".eatBurger").on("click", function (event) {
        event.preventDefault();
        id = $(this).val();
        // Send the PUT request.
        $.ajax("/" + id, {
            type: "PUT"
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            });
    });


})