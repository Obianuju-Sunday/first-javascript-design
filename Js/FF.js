
// active navbar
let nav = document.querySelector (".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navBar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 
// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id);
        let current = start; //0
        let range = end - start; //750
        let increment = end > start ? 1 : -1; //1
        let step = Math.abs(Math.floor(duration / range)); //1
        let timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current >= end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 750, 3000);
    counter("count2", 0, 750, 3000);
    counter("count3", 0, 750, 3000);
    counter("count4", 0, 750, 3000);
});