$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var userInput = $("input#user").val();
    var foodInput = $("input#food").val();
    var animalInput = $("input#animal").val();
    var bandInput = $("input#band").val();
    var hairColorInput = $("input#hairColor").val();
    var jobInput = $("input#job").val();

    $(".user").append(userInput);
    $(".food").append(foodInput);
    $(".animal").append(animalInput);
    $(".band").append(bandInput);
    $(".hairColor").append(hairColorInput);
    $(".job").append(jobInput);

    $("#results").show();
    event.preventDefault();
  });
});
