const email = document.getElementById("email")
const myForm = document.getElementById("myForm")
const content = document.getElementById("content")

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

myForm.addEventListener("submit",validateEmail)

function validateEmail(event) 
{   
    if (emailFormat.test(email.value))
    {
        
        content.innerText = ''
    }else{
        event.preventDefault();
        content.innerText = "Email is not valid";
    }
    
}