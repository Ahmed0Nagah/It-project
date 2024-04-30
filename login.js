var btn = document.getElementById('showpass');
var pass = document.getElementById('pass');
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