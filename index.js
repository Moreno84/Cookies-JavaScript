document.getElementById("myBtn").addEventListener('mouseenter', guardarCookie,false);

function guardarCookie(){
    
    let nombre = document.getElementById("input_name").value;
    let cookieName = "title_web";
    let cookieExpire = "expires=31 Dec 2021 23:59:59 GMT";
    document.cookie = cookieName + " = " + nombre + ";" + cookieExpire;
 

}
