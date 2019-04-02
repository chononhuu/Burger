$(function() {
    $(".change-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");
        var newSleepState = {
            devoured: newEaten
        };
  
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newSleepState
        }).then(function() {
            console.log("change burger to", newEaten);
            location.reload();
        });
    });
  
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
  
        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };
  
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created new burger!");
            location.reload();
        });
    });
  
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
  
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted burger", id);
            location.reload();
        });
    });
});
    