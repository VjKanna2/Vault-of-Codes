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
    var pw = document.getElementById("pword").value;  
    if(pw == "") {  
        document.getElementById("instructionMessage").innerHTML = "Fill the password please!"; 
        document.getElementById("instructionMessage").style.color = "red";
        return false;  
    } 
    if(pw.length >= 8){
        document.getElementById("instructionMessage").innerHTML = "STRONG PASSWORD";
        document.getElementById("instructionMessage").style.color = "green";
        return true;
    }
    if(pw.length  >= 6 && pw.length <= 8) {  
        document.getElementById("instructionMessage").innerHTML = "MEDIUM STRENGTH PASSWORD";
        document.getElementById("instructionMessage").style.color = "orange";
        return false;  
    }  
    if(pw.length <= 5) {  
        document.getElementById("instructionMessage").innerHTML = "WEAK PASSWORD";
        document.getElementById("instructionMessage").style.color = "red";
        return false;  
    } else {  
        document.getElementById("instructionMessage").innerHTML ="";
    }  
}