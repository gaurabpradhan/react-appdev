function login(){
    var u=document.getElementById("user").value;
    var p=document.getElementById("pass").value;   
    if (u==="user@gmail.com" && p==="root1234"){
        window.location.href="welcome.html";
        }
    else{
        alert("account not found! signup");
    }
}