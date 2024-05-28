let name=document.getElementById("name");
let quantity=document.getElementById("quantity");
let price=document.getElementById("price");
let update=document.getElementById("update");
let back=document.getElementById("back");


update.addEventListener("click", f1);
back.addEventListener("click", f2);

let old_dateString=localStorage.getItem("old_date");
let old_date=JSON.parse(old_dateString);
if(old_dateString){
    console.log(old_date);
}

function f1(){
    let name_value=name.value;
    let quantity_value=quantity.value;
    let price_value=price.value;
    fetch("/update.html", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({ 
            name: name_value, 
            quantity: quantity_value,
            price: price_value,
            old_date:old_date,
        })
    })
}
function f2(){
    setTimeout(() => {
        window.open("/index3.html", "_parent")
    }, 1000);
}
