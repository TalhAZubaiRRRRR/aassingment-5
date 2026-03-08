document.getElementById("login-btn")
.addEventListener("click",function(){
    const inputName = document.getElementById("input-name")
    const userName = inputName.value
    console.log(userName)
    const inputPass = document.getElementById("input-pass")
    const password = inputPass.value;
    console.log(password)

    if(userName == "admin" && password == "admin123" ){
        alert ("Login Success")
        window.location.assign("./home.html")
    }else{
        alert ("Login Failed")
        return
    }
})