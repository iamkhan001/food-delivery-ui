
$( document ).ready(function() {
    loadCartItems();
});

function addNewAddress(){    
    document.getElementById('ad-title').innerHTML = "New Address";
    $('#address-modal').modal('toggle');
}

function editAddress(){    
    document.getElementById('ad-title').innerHTML = "Edit Address";
    $('#address-modal').modal('toggle');
}

function loadCartItems(){
    var list = "";
    for (var i = 0; i < 4; i++){
        var item = "<div class='card' id='item-"+i+"'>"+
                        "<div class='row'>"+
                            "<div class='col-md-3'>"+
                                "<img src='assets/img/offers/offer-3.jpeg' class='cart-img'>"+
                            "</div>"+
                            "<div class='col-md-9'>"+
                                "<h4 class='text-left'>Noodles</h4>"+
                                "<h6 class='text-left'>Restaurent Name</h6>"+
                            "</div>"+
                            "<div class='bottom_right' >"+
                                "<button class='btn btn-outline-danger m-1 my-sm-0 '  onclick='delItem(\""+i+"\")' type='submit'><i class='fa fa-trash '></i></button>"+
                                "<button class='btn btn-outline-warning m-1 my-sm-0 '  onclick='minQty(\""+i+"\")' type='submit'><i class='fa fa-minus '></i></button>"+
                                "<p class='btn btn-outline-secondary m-1 my-sm-0' id='qty-"+i+"' >Qty 3 </p>"+
                                "<button class='btn btn-outline-success m-1 my-sm-0 '  onclick='plusQty(\""+i+"\")' type='submit'><i class='fa fa-plus '></i></button>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
        list += item;            
    }
    document.getElementById('cart-items').innerHTML = list;
}

function delItem(id){
    removeFadeOut(document.getElementById('item-'+id), 1000);
}

function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}

function minQty(id){
    var qty_s = $('#qty-'+id).text().substring(4);
    var qty = parseInt(qty_s);
    if (qty > 1) {
        qty = qty - 1;
        document.getElementById('qty-'+id).innerHTML = 'Qty '+qty;
    }
    console.log('qty: '+qty);
}

function plusQty(id){
    var qty_s = $('#qty-'+id).text().substring(4);
    var qty = parseInt(qty_s);
    qty = qty + 1;
    document.getElementById('qty-'+id).innerHTML = 'Qty '+qty;
    console.log('qty: '+qty);    
}