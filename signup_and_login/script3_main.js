let username=document.getElementById("username");
let create=document.getElementById("create");
let update=document.getElementById("update");

create.addEventListener("click", f1);
update.addEventListener("click", f2);

let userId;
fetch("/index3.html", {
    method: "POST",
})
.then(responce=>{
    return responce.json();
})
.then(data=>{
   username.textContent="username: "+data.username;
   userId=data.userId;
})



function f1(){
    setTimeout(() => {
        window.open("/create_order.html", "_parent"); 
    }, 1000);
    
}

function f2(){
    setTimeout(() => {
        window.open("/update.html", "_parent");
    }, 1000);
}