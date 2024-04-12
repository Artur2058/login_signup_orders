let name=document.getElementById("name");
let quantity=document.getElementById("quantity");
let price=document.getElementById("price");
let create=document.getElementById("create");
let back=document.getElementById("back");

create.addEventListener("click", cre());
back.addEventListener("click", ba);

function cre(){
    let name_value=name.value;
    let quantity_value=quantity.value;
    let price_value=quantity.value;
    fetch("/create_order.html", {
        method:"POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({ 
            name: name_value, 
            quantity: quantity_value,
            price: price_value,
        })
    })
    .then(response=>{
        return response.json();
    })
    .then(data=>{

    })
}

function ba(){
    setTimeout(() => {
        window.open("/index3.html", "_parent")
    }, 1000); 
}