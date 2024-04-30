var btn = document.getElementById('showpass');
var username = document.getElementById('uname');
var pass = document.getElementById('pass');
var butt = document.getElementById('btn').addEventListener('click',function(){
    var errormessage = document.getElementById('errormessege');
    if(username.value === ''|| pass.value === ''){
    errormessage.innerHTML = "wrong username or password!";
    errormessage.className = 'error';}
    else{
        open('home&login/home.html');
    }
})
function showpass(){
if( pass.type === 'password'){
    pass.type = 'text';
    btn.classList.remove('fa-eye');
    btn.classList.add('fa-eye-slash');
} else {
    pass.type = 'password';
    btn.classList.add('fa-eye');
    btn.classList.remove('fa-eye-slash');}
}

function link(){
    open("home&login/home.html");
}