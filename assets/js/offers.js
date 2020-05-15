$( document ).ready(function() {
    loadOffers();
});

function loadOffers() {
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
                                    "<small class='offer-old-amont'>$250</small>"+
                                    "<br>"+
                                    "<h4 class='offer-new-amount'>$250</h4>"+
                                "</div>"+
                                "<div class='bottom'>"+
                                    "<button class='btn btn-outline-secondary m-1 my-sm-0 btn-sm '  onclick='minQty()' type='submit'><i class='fa fa-minus '></i></button>"+
                                    "<p class='btn btn-outline-primary m-1 my-sm-0 btn-sm' >Qty 3 </p>"+
                                    "<button class='btn btn-outline-success m-1 my-sm-0 btn-sm'  onclick='plusQty()' type='submit'><i class='fa fa-plus '></i></button>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
        
        list += item;
    }

    document.getElementById('offer-content').innerHTML = list;

}
