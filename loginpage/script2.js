function signup(){
    var n=document.getElementById("name").value;
    var u=document.getElementById("user").value;
    var p=document.getElementById("pass").value;   
    if (n.trim()==""){
        alert("name is required");
       }   
    else if(u.trim()==""){
        alert("email id invalid")
    }
    else if(p.trim()==""){
        alert("password required");
    }       
    else if(p.length<8){
        alert("password length must be 8 or more");
    }
    else{
        alert("Signup succesful! Login to continue");
        window.location.href="index.html";
    }   
}