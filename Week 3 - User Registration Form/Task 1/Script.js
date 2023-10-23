function myFunction(){
    var x = document.getElementById("pword");
    if (x.type === "password") {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }
}
function myFunction2(){
    var y = document.getElementById("pword2");
    if (y.type === "password") {
        y.type = "text";
    } 
    else {
        y.type = "password";
    }
}

function myFunction3(){
    var pw = document.getElementById("pword").value;  
    if(pw == "") {  
        document.getElementById("instructionMessage").innerHTML = "Fill the password please!";  
        return false;  
    }  
    if(pw.length < 8) {  
        document.getElementById("instructionMessage").innerHTML = "Password length must be at least 8 characters";  
        return false;  
    }  
    if(pw.length > 15) {  
        document.getElementById("instructionMessage").innerHTML = "Password length must not exceed 15 characters";  
        return false;  
    } else {  
        document.getElementById("instructionMessage").innerHTML ="";
    }  
}

function myFunction4(){
    var a = document.getElementById("pword").value;
    var b = document.getElementById("pword2").value;
    if (a != b) {
        document.getElementById("instructionMessage2").style.color = "red";
        document.getElementById("instructionMessage2").innerHTML = "☒ Use same password";
        document.getElementById("signupButton").disabled = true;
        document.getElementById("signupButton").style.opacity = (0.4);
        return false;
    } 
    else{
        document.getElementById("instructionMessage2").style.color = "green";
        document.getElementById("instructionMessage2").innerHTML = "🗹 Password Matched";
        document.getElementById("signupButton").disabled = false;
        document.getElementById("signupButton").style.opacity = (1);
    }
}
