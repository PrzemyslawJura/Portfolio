const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
    } else {
        if (scrollY > 0) {
            nav.classList.add("nav--blur");
        } else {
            nav.classList.remove("nav--blur");
        }
        nav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
})


const fir = document.querySelector(".fir");
const sec = document.querySelector(".sec");
const thr = document.querySelector(".thr");
const frth = document.querySelector(".frth");
const fiv = document.querySelector(".fiv");

fir.classList.add("menuoption--light");

window.addEventListener("scroll", () =>{
    if (scrollY >= 0 && scrollY <= 500) {
        fir.classList.add("menuoption--light");
        sec.classList.remove("menuoption--light");
    } else if (scrollY > 500 && scrollY <= 1250){
        sec.classList.add("menuoption--light");
        fir.classList.remove("menuoption--light");
        thr.classList.remove("menuoption--light");
    } else if (scrollY > 1250 && scrollY <= 2750){
        thr.classList.add("menuoption--light");
        sec.classList.remove("menuoption--light");
        frth.classList.remove("menuoption--light");
    } else if (scrollY > 2750 && scrollY <= 3200){
        frth.classList.add("menuoption--light");
        thr.classList.remove("menuoption--light");
        fiv.classList.remove("menuoption--light");
    }
})



const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

var navv = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

function openNav() {
    if(navv == true) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("sidenav3").style.opacity = "0";
        document.getElementById("sidenav4").style.opacity = "0";
        document.getElementById("sidenav5").style.opacity = "0";
        document.getElementById("sidenav6").style.opacity = "0";
        document.getElementById("sidenav7").style.opacity = "0";
        document.getElementById("container").style.marginLeft = "0";
        navv = false;
    }
    else if(navv == false && window.innerWidth < 1200)
    {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("sidenav3").style.opacity = "1";
        document.getElementById("sidenav4").style.opacity = "1";
        document.getElementById("sidenav5").style.opacity = "1";
        document.getElementById("sidenav6").style.opacity = "1";
        document.getElementById("sidenav7").style.opacity = "1";
        document.getElementById("container").style.marginLeft = "100%";
        navv = true;
    }
}
