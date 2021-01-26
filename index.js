document.getElementById("myBtn").addEventListener("click", guardarCookie, false);

function guardarCookie(){
    let value = document.getElementById("value").value;
    let cookieName = 'title_web';
    let cookieExpire = "expires=31,  Dec 2021 23:59:59 GMT";
    document.cookie = cookieName + " = " + value + " ; " + cookieExpire;
}

