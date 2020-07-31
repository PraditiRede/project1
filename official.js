$(function(){
    $("#navbarToggle").blur(function(event){
        $("#navbarSupportedContent").collapse('hide');
    });
    $("#navbarToggle").click(function(event){
        $(event.target).focus();
    });
});