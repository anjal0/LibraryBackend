let uname=document.getElementById("email");
let psw=document.getElementById("psw");
let pswrepeat=document.getElementById("pswrepeat");
let error=document.getElementById("error");

 function validate(){
     let regexp =/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
     if (regexp.test(email.value)){
            error.innerHTML="Valid";
            error.style.color="green";
            return true;
     }
     else{
         error.innerHTML="Invalid Email";
         error.style.color="red";
         return false;
     }
 }

function valid(){
    if(uname.value=="admin" && psw.value=="admin"){
        document.getElementById("forms").action="/index";
    }
    else{
        document.getElementById("forms").action="/user";

    }
    
}
function validpass() 
{ 
var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(passw.test(psw.value)) 
{ 
return true;
}
else
{ 
alert('Password must contain atleast one upper case , one special character and one number')
return false;
}
} 
function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
   
    if (psw.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(psw.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(psw.value)) {
        strength.innerHTML = '<span style="color:green"><b>Strong!</b></span>';
    } else if (mediumRegex.test(psw.value)) {
        strength.innerHTML = '<span style="color:orange"><b>Medium!</b></span>';
    } else {
        strength.innerHTML = '<span style="color:red"><b>Weak!</b></span>';
    }
}