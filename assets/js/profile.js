$( document ).ready(function() {
    loadAddresses();
});

function addNewAddress(){    
    document.getElementById('ad-title').innerHTML = "New Address";
    $('#address-modal').modal('toggle');
}

function editAddress(){    
    document.getElementById('ad-title').innerHTML = "Edit Address";
    $('#address-modal').modal('toggle');
}
function delAddress(){    
    $('#del-address-modal').modal('toggle');
}

function loadAddresses() {
    var list = "<div class='row'>";

    for(var i=0; i<4; i++) {

        var item = "<div class='col-md-6 my-2' >"+
                        "<div class='card card-address' >"+
                            "<div class='card-body'>"+
                                "<h5 class='card-title text-left'>Imran Khan</h5>"+
                                "<h6 class='card-subtitle mb-2 text-left text-muted'>8999315879</h6>"+
                                "<p class='text-para'>1 Jalan Bukit Merah, #07-13 E-Centre@Redhill Singapore 159471</p>"+
                                "<div class='bottom_right' >"+
                                    "<button class='btn btn-outline-success m-1 my-sm-0 ' style='margin-top: 5px;' onclick='editAddress()' type='submit'><i class='fa fa-edit '></i></button>"+
                                    "<button class='btn btn-outline-danger m-1 my-sm-0 ' style='margin-top: 5px;' onclick='delAddress()' type='submit'><i class='fa fa-trash '></i></button>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
        list += item;                    
    }

    list+="</div>"+"<div><button type='button' class='btn btn-outline-success' onclick='addNewAddress()'>Add New Address</button></div>";

    document.getElementById("btn-address").className = "list-group-item active";
    document.getElementById("btn-orders").className = "list-group-item ";
    document.getElementById('content').innerHTML = list;
}

function loadOrders(){
    var list = "";

    for(var i=0; i<3; i++) {

        var item = "<div class='col-md-12 my-2' >"+
                        "<div class='card ' >"+
                            "<div class='card-body'>"+
                                "<h6 class='text-right ' style='margin-bottom: 20px;'>22 May 2020, 08:55 pm</h6>"+                
                                "<div style='margin-bottom: 40px;'>"+
                                    "<div class='row'>"+
                                        "<div class='col-md-4' >"+
                                            "<img src='assets/img/kfc.png' style='width: 80px; height: 80px;'>"+
                                            "<h5 >KFC Singapore</h5>"+
                                        "</div>"+
                                        "<div class='col-md-8' >"+
                                            "<table style='width: 100%;'>"+
                                                "<tr>"+
                                                    "<td>"+
                                                        "chicken noodels"+
                                                    "</td>"+
                                                    "<td>"+
                                                        "4 Qty"+
                                                    "</td>"+
                                                    "<td>"+
                                                        "$8"+
                                                    "</td>"+
                                                "</tr>"+
                                                "<tr>"+
                                                    "<td>"+
                                                        "chicken noodels"+
                                                    "</td>"+
                                                    "<td>"+
                                                        "4 Qty"+
                                                    "</td>"+
                                                    "<td>"+
                                                        "$8"+
                                                    "</td>"+
                                                "</tr>"+
                                                "<tr>"+
                                                    "<td>"+
                                                        "chicken noodels"+
                                                    "</td>"+
                                                    "<td>"+
                                                        "4 Qty"+
                                                    "</td>"+
                                                    "<td>"+
                                                        "$8"+
                                                    "</td>"+
                                                "</tr>"+
                                            "</table>"+
                                        "</div>"+
                                    "</div>"+
                                    "<div class='row'>"+
                                        "<div class='col-md-4' >"+
                                            "<img src='assets/img/kfc.png' style='width: 80px; height: 80px;'>"+
                                            "<h5 >KFC Singapore</h5>"+
                                        "</div>"+
                                        "<div class='col-md-8' >"+
                                        "<table style='width: 100%;'>"+
                                            "<tr>"+
                                                "<td>"+
                                                    "chicken noodels"+
                                                "</td>"+
                                                "<td>"+
                                                    "4 Qty"+
                                                "</td>"+
                                                "<td>"+
                                                    "$8"+
                                                "</td>"+
                                                "</tr>"+
                                            "<tr>"+
                                                "<td>"+
                                                    "chicken noodels"+
                                                "</td>"+
                                                "<td>"+
                                                    "4 Qty"+
                                                "</td>"+
                                                "<td>"+
                                                    "$8"+
                                                "</td>"+
                                            "</tr>"+
                                            "<tr>"+
                                                "<td>"+
                                                    "chicken noodels"+
                                                "</td>"+
                                                "<td>"+
                                                    "4 Qty"+
                                                "</td>"+
                                                "<td>"+
                                                    "$8"+
                                                "</td>"+
                                            "</tr>"+
                                        "</table>"+
                                    "</div>"+
                                "</div>"+
                            "<div class='bottom_right' >"+
                                "<h4 class='text-right'>"+
                                    "Total: $25"+
                                "</h4>"+
                            "</div>"+
                            "<div class='bottom_left' >"+
                                "<button class='btn btn-outline-success m-2 ' style='margin-top: 5px;' type='submit'><i class='fa fa-redo mr-1'></i>Reorder</button>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                    "</div>"+
                "</div>";

        list += item;
    }
    document.getElementById("btn-orders").className = "list-group-item active";
    document.getElementById("btn-address").className = "list-group-item ";

    document.getElementById('content').innerHTML = list;

}