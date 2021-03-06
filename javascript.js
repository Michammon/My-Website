//hamburger

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

//observer

const obs = document.querySelectorAll(".obs")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
     
    })
})

obs.forEach(obs =>{
    observer.observe(obs)
})


//light-dark-theme

const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'light'){
        themeSwitch.checked = true;
    }
}

function switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
themeSwitch.addEventListener('change', switchTheme, false);


//=============language switch============//

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll("#langwrapper");
const homeEl = document.querySelector("#menuContent1");
const aboutEl = document.querySelector("#menuContent2");
const projectsEl = document.querySelector("#menuContent3");
const skillsEl = document.querySelector("#menuContent4");
const contactEl = document.querySelector("#menuContent5");
const intro1El = document.querySelector("#introContent1");
const intro2El = document.querySelector("#introContent2");
const scrollEl = document.querySelector("#scrollContent1");
const aboutContent1El = document.querySelector("#aboutContent1");
const aboutContent2El = document.querySelector("#aboutContent2");
const aboutContent3El = document.querySelector("#aboutContent3");
const projectContent1El = document.querySelector("#projectContent1");
const projectContent2El = document.querySelector("#projectContent2");
const workContent1El = document.querySelector("#workContent1");
const workContent2El = document.querySelector("#workContent2");
const workContent3El = document.querySelector("#workContent3");
const skillContent1El = document.querySelector("#skillContent1");
const skillContent2El = document.querySelector("#skillContent2");
const footerContent1El = document.querySelector("#footerContent1");
const footerContent2El = document.querySelector("#footerContent2");
const footerContent3El = document.querySelector("#footerContent3");
const footerContent4El = document.querySelector("#footerContent4");
const footerContent5El = document.querySelector("#footerContent5");
const footerContent6EL = document.querySelector("#footerContent6");



link.forEach(el=>{
    el.addEventListener("click", ()=>{
        langEl.querySelector('.active2').classList.remove('active2');

        el.classList.add('active2');

        const attr = el.getAttribute('language');

        homeEl.textContent = langTrans[attr].home;
        aboutEl.textContent = langTrans[attr].about;
        projectsEl.textContent = langTrans[attr].projects;
        skillsEl.textContent = langTrans[attr].skills;
        contactEl.textContent = langTrans[attr].contact;
        intro1El.textContent = langTrans[attr].homeDescr1;
        intro2El.textContent = langTrans[attr].homeDescr2;
        scrollEl.textContent = langTrans[attr].scroll;
        aboutContent1El.textContent = langTrans[attr].aboutMe1;
        aboutContent2El.textContent = langTrans[attr].aboutMe2;
        aboutContent3El.textContent = langTrans[attr].aboutMe3;
        projectContent1El.textContent = langTrans[attr].project1;
        projectContent2El.textContent = langTrans[attr].project2;
        workContent1El.textContent = langTrans[attr].work1;
        workContent2El.textContent = langTrans[attr].work2;
        workContent3El.textContent = langTrans[attr].work3;
        skillContent1El.textContent = langTrans[attr].skill1;
        skillContent2El.textContent = langTrans[attr].skill2;
        footerContent1El.textContent = langTrans[attr].footer1;
        footerContent2El.textContent = langTrans[attr].footer2;
        footerContent3El.textContent = langTrans[attr].footer3;
        footerContent4El.textContent = langTrans[attr].footer4;
        footerContent5El.textContent = langTrans[attr].footer5;
        footerContent6EL.textContent = langTrans[attr].footer6;
    })
})

var langTrans = {
    "english":{
        home:"Home",
        about:"About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        homeDescr1: "I'm ??ukasz Michalski",
        homeDescr2: "and I'm a beginner front-end developer",
        scroll: "Scroll Down",
        aboutMe1: "About Me",
        aboutMe2: "??ukasz Michalski, beginner, self-taught front-end developer from Poland." +
        "Looking for permament job, but also pleased to accept a freelance offers." +
        "Currently I'm learning html, css and js. My main goal is to make at least one step" +
        "forward every day for self-development. In free time im trying to polished my skills in vector graphic programms.",
        aboutMe3: "Download CV",
        project1: "Projects",
        project2: "Everything",
        work1: "Youtube clone - work in progress...",
        work2: "Chrome Dino - work in progress...",
        work3: "Auto-registration by using python+selenium - work in progress...",
        skill1: "Skills",
        skill2: "My technical ability",
        footer1: "Contact with me",
        footer2: "I am looking for a long-term employment, a place where", 
        footer3: "I can develop myself and provide my skills for the firm.", 
        footer4: "Message me on gmail,  call me number 693 639 797", 
        footer5: "Copyright ?? 2022 ??ukasz Michalski. All rights reserved",
        footer6: "or drop message on any bellow listed social media sites."
    },
    "polish":{
        home:"Strona G????wna",
        about:"O Mnie",
        projects: "Projekty",
        skills: "Umiej??tno??ci",
        contact: "Kontakt",
        homeDescr1: "??ukasz Michalski,",
        homeDescr2: "pocz??tkuj??cy front-end developer",
        scroll: "Scrollnij w d????",
        aboutMe1: "O Mnie",
        aboutMe2: "Jestem pocz??tkuj??cym web developerem, samoukiem pochodz??cym z Polski.  " +
        "Szukam sta??ego zatrudnienia, b??d?? pracy o charakterze freelancer. " +
        "Aktualnie ucz?? si?? html, css oraz JavaScriptu. Moim mottem jest, " +
        "aby ka??dego dnia robi?? przynajmniej jeden krok do przodu dla samorozwoju. " +
        "W wolnych chwilach sp??dzam czas na ulepszaniu umiej??tno??ci w grafice wektorowej.",
        aboutMe3: "Pobierz CV",
        project1: "Projekty",
        project2: "Wszystko",
        work1: "Klon youtube'a - w trakcie tworzenia...",
        work2: "Chrome Dino - w trakcie tworzenia...",
        work3: "Auto rejestracja konta - w trakcie tworzenia...",
        skill1: "Umiej??tno??ci",
        skill2: "Moje zdolno??ci techniczne",
        footer1: "Skontaktuj si?? ze mn??",
        footer2: "Szukam sta??ego zatrudnienia, miejsca gdzie", 
        footer3: "b??d?? m??g?? si?? rozwija?? oraz zaoferowa?? w??asne umiej??tno??ci dla firmy.", 
        footer4: "Skontaktuj si?? ze mn?? poprzez g-mail'a, zadzwo??/wy??lij sms'a na nr 693 639 797", 
        footer5: "Copyright ?? 2022 ??ukasz Michalski. Wszystkie prawa zastrze??one", 
        footer6: "b??d?? zostaw wiadomo???? na kt??rym?? z poni??ej podanym portalu spo??eczno??ciowym."  
    }
};
