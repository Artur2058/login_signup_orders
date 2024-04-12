let update=document.getElementById("update");
let back=document.getElementById("back");

update.addEventListener("click", f1);
back.addEventListener("click", f2);

function f1(){
    setTimeout(() => {
        window.open("/index3.html", "_parent")
    }, 1000);
}
function f2(){
    setTimeout(() => {
        window.open("/index3.html", "_parent")
    }, 1000);
}