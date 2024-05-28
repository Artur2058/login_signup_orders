let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button1 = document.getElementById("button1");
let button2=document.getElementById("button2");
let text_of_login=document.getElementById("text_of_login");
button1.addEventListener("click", f1);


function f1() {
    let inputValue1 = input1.value; 
    let inputValue2 = input2.value; 
    if (inputValue1 && inputValue2) {
        fetch("/index2.html", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ 
                Email: inputValue1, 
                Password: inputValue2 ,
            })
        })
        .then(responce=>{
            return responce.json();
        })
        .then(data=>{
            if(data.message=="Password is right"){
                text_of_login.style.color="green";
                text_of_login.textContent="Password is right";
                setTimeout(() => {
                    window.open("/index3.html", "_parent")     
            }, 1000);
            }
            else if(data.message=="Password is false"){
                text_of_login.style.color="red";
                text_of_login.textContent="Password is false";
            }
        })
    }
}

