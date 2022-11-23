$('body').append('<div id = "loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function() {
    setTimeout(removeLoader, 5000);
}) 
function removeLoader() {
    $('#loadingDiv').fadeOut(500, function() {
        $('#loadingDiv').remove();
    })
}