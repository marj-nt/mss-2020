function submitForm() {
    $("#modal-outer").fadeIn();
    $("#modal-inner").fadeIn();
    $('.form-bottom button').prop('disabled', true);
    setTimeout(function(){ 
        $("#modal-outer").fadeOut();
        $("#modal-inner").fadeOut();
    }, 3000);
    $('.form-bottom button').prop('disabled', false);
}