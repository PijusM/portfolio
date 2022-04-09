let lastpos = 0;
let header = document.getElementById("header");
window.addEventListener("scroll", function(){
    let scrolltop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolltop > lastpos){
        header.style.top="-120px";
    }
    else{
        header.style.top="0";
    }
    lastpos=scrolltop;
})