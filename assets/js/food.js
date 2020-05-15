$( document ).ready(function() {

    $('.js-example-basic-multiple').select2({
        placeholder: "Select a Category"
    });

    $('.js-example-basic-multiple').on('change', function(){
        $(this).find('option:selected').addClass('btn');
    });

    loadMenuItems();
});

function loadMenuItems() {
    var list = "";
    for (var i=0; i<12; i++) {
        var item = "<div class='col-md-6 col-lg-3'>"+
                        "<div class=' card block-food'>"+
                            "<div class='table'>"+
                                "<img src='assets/img/offers/offer-4.jpeg' class='img-responsive food-img' alt='img'>"+
                                "<h4>Noodles</h4>"+
                                "<h6>Restaurent</h6>"+
                            "</div>"+
                            "<div>"+
                                "<div>"+
                                    "<h4>$250</h4>"+
                                "</div>"+
                                "<div class='bottom'>"+
                                    "<button class='btn btn-outline-success m-1 my-sm-0 btn-sm'  onclick='plusQty()' type='submit'><i class='fa fa-cart-plus '></i></button>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
        
        list += item;
    }

    document.getElementById('food-content').innerHTML = list;

}
