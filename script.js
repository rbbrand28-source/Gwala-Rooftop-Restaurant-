const modal = document.getElementById("reservationModal");
const reserveBtn = document.getElementById("reserveBtn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmationMessage");

reserveBtn.onclick = () => {
modal.style.display = "flex";
};

closeBtn.onclick = () => {
modal.style.display = "none";
};

window.onclick = (e)=>{
if(e.target == modal){
modal.style.display="none";
}
};

form.addEventListener("submit",function(e){

e.preventDefault();

confirmation.innerHTML = `
Reservation request received.<br><br>
For confirmation please call this number:<br>
<strong>09660257312</strong>
`;

});


const swiper = new Swiper(".reviewSwiper",{
loop:true,
autoplay:{
delay:3500
},
spaceBetween:30
});


function reveal(){

const reveals=document.querySelectorAll(".reveal");

reveals.forEach(el=>{

const windowHeight=window.innerHeight;
const elementTop=el.getBoundingClientRect().top;

if(elementTop<windowHeight-100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll",reveal);


gsap.from(".hero h1",{opacity:0,y:60,duration:1});
gsap.from(".hero p",{opacity:0,y:40,duration:1,delay:0.3});
gsap.from("#reserveBtn",{scale:0,duration:0.6,delay:0.6});


const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach(img=>{
img.onclick = ()=>{
lightbox.style.display="flex";
lightboxImg.src = img.src;
};
});

lightbox.onclick = ()=>{
lightbox.style.display="none";
};