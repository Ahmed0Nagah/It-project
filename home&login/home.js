var icon = document.querySelector('.icon');
var search = document.querySelector('.search');
icon.onclick = function(){
    search.classList.toggle('active')
}
function mobile(){
    open("../mobile/first.html");
}
function weapons(){
    open("../weapons/home page.html");
}
function home_appliances(){
    open("../home appliances/categoryPage/category.html");
}
