let navList = document.querySelector(".nav-ul");
let navBtn = document.querySelector(".nav-dropdown-svg");

navBtn.addEventListener("click", function(event){
    navList.classList.toggle("nav-dropdown-open");
    navBtn.classList.toggle("nav-dropdown-svg-gray");
});
navList.addEventListener("click", function(){
    navList.classList.toggle("nav-dropdown-open");
    navBtn.classList.toggle("nav-dropdown-svg-gray");
});

