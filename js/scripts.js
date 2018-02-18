$(document).ready(function(){
  $("form#Floral").submit(function(event){
    event.preventDefault();
    var enterName = $("input#inputName").val();
    var enterAdress = $("input#inputAddress").val();
    var enterCity= $("input#inputCity").val();
    var enterZipcode = $("input#inputZipcode").val();
    var enterFlower = $("#Flower").val();

    $(".inputName").text("enterName");
    $(".inputAdress").text("enterAdress");
    $(".inputCity").text("enterCity");
    $(".inputZipcode").text("enterZipcode");
    $(".Flower").text("enterFlower");
    $("div.homepage").fadeOut();
    $("div.reciept").slideDown();
  });
});
