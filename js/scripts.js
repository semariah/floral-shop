$(document).ready(function(){
  $("form#Floral").submit(function(event){
    event.preventDefault();
    var enterName = $("#inputName").val();
    var enterAdress = $("#inputAddress").val();
    var enterCity= $("#inputCity").val();
    var enterZipcode = $("#inputZipcode").val();
    var enterFlower = $("#Flower").val();

    $(".inputName").text(enterName);
    $(".inputAdress").text(enterAdress);
    $(".inputCity").text(enterCity);
    $(".inputZipcode").text(enterZipcode);
    $(".Flower").text(enterFlower);
    $("div.homepage").fadeOut();
    $("div.reciept").fadeIn();
  });
});
