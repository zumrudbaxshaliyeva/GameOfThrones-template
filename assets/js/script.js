//hamburger-menu

const h_icon=document.querySelector(".hamburger-icon");
const nav =document.querySelector(".navigation");
const menuIcon =document.querySelector('#menu__icon')

h_icon.addEventListener("click",()=>{
    nav.classList.toggle('navigation-mobile')
    menuIcon.classList.toggle("fa-times");


});

 //Modal view


 const s_btn= document.getElementById("sign-btn");
 const s_modal =document.getElementById('modal-content');
 const s_closebtn =document.getElementById('close');

 const w_button= document.querySelector(".watch-btn");
 const w_modal =document.querySelector('.watch1-box');
 const w_clsbtn =document.querySelector('.close_watch');
//open modal
s_btn.addEventListener('click', function() {
  s_modal.style.display = 'flex';
});
//close modal
s_closebtn.addEventListener('click', function() {
  s_modal.style.display = 'none';
});

// outside click
s_modal.addEventListener('click', function(event) {
  if (event.target === s_modal) {
    s_modal.style.display = 'none';
  }
});


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


