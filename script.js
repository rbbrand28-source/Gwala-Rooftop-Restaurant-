const modal = document.getElementById("reservationModal");
const btn = document.getElementById("reserveBtn");
const close = document.querySelector(".close");
const form = document.getElementById("bookingForm");
const phoneReveal = document.getElementById("phoneReveal");

btn.onclick = () => {
modal.style.display = "flex";
};

close.onclick = () => {
modal.style.display = "none";
};

window.onclick = (e) => {
if(e.target == modal){
modal.style.display = "none";
}
};

form.addEventListener("submit",function(e){

e.preventDefault();

phoneReveal.innerHTML =
"For confirmation please call this number: <br><strong>09660257312</strong>";

});



const swiper = new Swiper(".mySwiper",{
loop:true,
autoplay:{
delay:3000
}
});


function reveal(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;

const elementTop=reveals[i].getBoundingClientRect().top;

if(elementTop<windowHeight-100){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);



gsap.from(".hero h1",{
y:80,
opacity:0,
duration:1
});

gsap.from(".hero p",{
y:60,
opacity:0,
delay:0.5
});

gsap.from("#reserveBtn",{
scale:0,
delay:1
});
