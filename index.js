const pattern = 
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let field1 = document.querySelector("#input1")
let field2 = document.querySelector("#input2")

let message = document.createElement('div');
message.innerHTML = "Please check your email"
message.className = "error-msg"

let messageTwo = document.createElement('div');
messageTwo.innerHTML = "Please check your email"
messageTwo.className = "error-msg"

function checkOne(){
    if(field1.value.match(pattern)){
        console.log("Valid")
        field1.value = "";
        message.remove();
    }else{
        console.log("invalid");
        document.querySelector('.input-cls').append(message);
    }
}
function checkTwo(){
    if(field2.value.match(pattern)){
        console.log("Valid")
        field2.value = "";
        messageTwo.remove();
    }else{
        console.log("invalid");
        document.querySelector('.input-cls-2').append(messageTwo);
    }
}
