let username = document.getElementById("username");
let table = document.getElementById("table");
let name = document.getElementById("name");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let logout=document.getElementById("logout");
let update=[];
let deletee=[];

create.addEventListener("click", f1);
logout.addEventListener("click", Logout);

let arr_of_name = [];
let arr_of_quantity = [];
let arr_of_price = [];
let arr_of_email = [];
fetch("/index3.html", {
    method: "POST",
})
.then(response => {
    return response.json();
})
.then(data => {
    username.textContent = "Username: " + data.username;
        arr_of_name = data.name;
        arr_of_quantity = data.quantity;
        arr_of_price = data.price;
        arr_of_email=data.email;
        let index_of_row_update=1;
        let index_of_th=1;    
        for(let i=0; i<arr_of_email.length; i++){
            if(data.username==arr_of_email[i]){
                let tr = document.createElement("tr");
                tr.id="tr"+index_of_th;
                let th=[];
                for (let j = 0; j < 5; j++) {
                    th[j] = document.createElement("th");
                    th[j].id="th"+(j+1);
                    if(j==0){
                        th[j].textContent=arr_of_name[i];
                    }
                    else if(j==1){
                        th[j].textContent=arr_of_quantity[i];
                    }
                    else if(j==2){
                        th[j].textContent=arr_of_price[i];
                    }
                    else if(j==3){
                        th[j].textContent=th[2].textContent*th[3].textContent;
                    }
                    else if(j==4){
                        let button_of_update=document.createElement("button");
                        button_of_update.textContent="Update";
                        button_of_update.id=index_of_row_update;
                        button_of_update.className="update";
                        update.push(button_of_update)
                        th[j].appendChild(button_of_update);
                        let button_of_delete=document.createElement("button");
                        button_of_delete.textContent="Delete";
                        button_of_delete.id=index_of_row_update;
                        button_of_delete.className="delete";
                        deletee.push(button_of_delete);
                        th[j].appendChild(button_of_delete);
                        index_of_row_update++;
                    }
                    tr.appendChild(th[j]);
                }
                table.appendChild(tr);
                index_of_th++;          
        }
    }
})
.then(()=>{
    for(let i=0; i<update.length; i++){
        update[i].addEventListener("click", function(){
            f2(i+1)
        })
    }
    for(let i=0; i<deletee.length; i++){
        deletee[i].addEventListener("click", function(){
            f3(i+1);
        })
    }
})

function f1(){
    setTimeout(() => {
        window.open("/create_order.html", "_parent"); 
    }, 1000);  
}


function f2(trIndex){
    let tr=document.getElementById("tr"+trIndex);
    let th=tr.querySelectorAll("th");
    let old_date={
        name: th[0].textContent,
        quantity: th[1].textContent, 
        price: th[2].textContent,
    }
    localStorage.setItem("old_date", JSON.stringify(old_date));
    setTimeout(() => {
        window.open("/update.html", "_parent");
    }, 1000);
}

function f3(trIndex){
    let tr=document.getElementById("tr"+trIndex);
    let th=tr.querySelectorAll("th");
    let deleted_date={
        name: th[0].textContent,
        quantity: th[1].textContent, 
        price: th[2].textContent,
    }
    localStorage.setItem("deleted_date", JSON.stringify(deleted_date));
    setTimeout(() => {
        window.open("/delete.html", "_parent");
    }, 1000);
}

function Logout(){
   localStorage.clear();
   setTimeout(() => {
    window.open("/index2.html", "_parent");
   }, 1000);
   fetch("/logout.html", {
    method:"POST",
   })
   .then((response)=>{
    return response.json();
   })
   .then((data)=>{
    if(data.message="yes"){
        setTimeout(() => {
            window.open("/index2.html");
        }, 1000);
    }
   })
}