$(document).ready(function() {
    $('.js-example-basic-multiple').select2({
        placeholder: "Select a Category"
    });

    $('.js-example-basic-multiple').on('change', function(){
        $(this).find('option:selected').addClass('btn');
    });
});