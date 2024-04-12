
const input1=document.getElementById("input1");
const input2=document.getElementById("input2");
const input3=document.getElementById("input3");
const input4=document.getElementById("input4");
const text1=document.getElementById("text1");
const button1=document.getElementById("button1");

button1.addEventListener("click", f1);

function f1(){
    let input1_value=input1.value;
    let input2_value=input2.value;
    let input3_value=input3.value;
    let input4_value=input4.value;
    if(input1_value && input2_value && input3_value && input4_value){
    fetch("/index.html", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            Name:input1_value,
            Surname:input2_value,
            Email:input3_value,
            Password:input4_value,
        })
    })
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        if(data.message=="Successful"){
            text1.style.color="green";
            text1.textContent=data.message;
            setTimeout(() => {
                    window.open("/index2.html", "_parent")        
            }, 1000);
        }
        if(data.message=="It's wrong"){
            text1.style.color="red";
            text1.textContent=data.message;
        }
        
    })
}
}