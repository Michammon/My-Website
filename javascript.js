const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(element =>
    element.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//intro
 
let intro = document.querySelector('.intro-screen');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span,index)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (index + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span,index)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(index + 1) * 50)
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2500)
    })
})