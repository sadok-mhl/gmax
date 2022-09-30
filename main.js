///change nav bar when we scroll

window.addEventListener ('scroll',() => {
document.querySelector('nav').classList.toggle
('window-scroll', window.scrollY >100)    

})


//show/hide FAQS

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');


        //change icon 
        const icon=faq.querySelector('.faq__icon i');
        if(icon.className==="uil uil-plus"){
        icon.className="uil uil-minus" ;}
        else{
        icon.className="uil uil-plus" ;
        }
    })
})

//nav menu

const menu = document.querySelector(".nav__menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click', () => {
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    menubtn.style.display="none";
})

//close menu

function closenav() {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
}
closebtn.addEventListener('click',closenav)