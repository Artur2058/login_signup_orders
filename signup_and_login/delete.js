let yes=document.getElementById("yes");
let no=document.getElementById("no");

yes.addEventListener("click", f1);
no.addEventListener("click", f2);

let deleted_dateString=localStorage.getItem("deleted_date");
let deleted_date=JSON.parse(deleted_dateString);
if(deleted_dateString){
    console.log(deleted_date);
}

function f1(){
    fetch("/delete.html", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({ 
            deleted_date:deleted_date,
        })
    }).then((responce)=>{
      return responce.json;
    })
    .then((data)=>{
        if(data.message="date was deleted"){
            setTimeout(() => {
                window.open("/index3.html", "_parent");
            }, 1000);
        }
    }
    )
}

function f2(){
      setTimeout(() => {
        window.open("/index3.html", "_parent");
    }, 1000);
}