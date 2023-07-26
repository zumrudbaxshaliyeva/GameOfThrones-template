//hamburger-menu

const h_icon=document.querySelector(".hamburger-icon");
const nav =document.querySelector(".navigation");
const menuIcon =document.querySelector('#menu__icon')

h_icon.addEventListener("click",()=>{
    nav.classList.toggle('navigation-mobile')
    menuIcon.classList.toggle("fa-times");


});

 //Modal view
 const w_button= document.querySelector(".watch-btn");
 const w_modal =document.querySelector('.watch1-box');
 const w_clsbtn =document.querySelector('.close_watch');

 const s_btn= document.querySelector(".sign-btn");
 const s_modal =document.querySelector('#modal-content');
 const s_clsbtn =document.querySelector('#close');


    w_button.addEventListener("click",
    ()=>{
    w_button.classList.add('active');
    w_modal.style.display='flex';
    });

    w_clsbtn.addEventListener("click",
    ()=>{
        w_button.classList.remove('active');
        w_modal.style.display='none';
    });



    s_btn.addEventListener("click",
    ()=>{
    s_modal.style.display ='block';
    s_btn.classList.add('active');  
    });

    s_clsbtn.addEventListener('click',
    ()=>{
    s_modal.style.display="none";
    s_btn.classList.remove('active');
    });

    window.addEventListener("click",
    (event)=> {
    if (event.target==s_modal) {
        s_modal.style.display='none';
    }
    });





//slider part 

var swiper = new Swiper(".swiper-container", {
     navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination:false,
    autoplay: {
     delay: 5000,
     disableOnInteraction: false,
     },
    breakpoints: {
        320:{
            slidesPerView: 2,
            spaceBetween: 15,
        },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
  
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
  
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });


