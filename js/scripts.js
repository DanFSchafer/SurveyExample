$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var userInput = $("input#user").val();
    var foodInput = $("input#food").val();
    var animalInput = $("input#animal").val();
    var bandInput = $("input#band").val();
    var jobInput = $("input#job").val();
    var hairColor2Input = $("input:radio[name=hairColor2]:checked").val();
    var animalInput = $("#animal").val();
    var dobInput = $("#born").val();

    $(".user").text(userInput);
    $(".food").text(foodInput);
    $(".animal").text(animalInput);
    $(".band").text(bandInput);
    $(".hairColor2").text(hairColor2Input);
    $(".job").text(jobInput);
    $(".born").text(dobInput);
    $("#results").show();

    event.preventDefault();
  });
});
