const reserveBtn = document.getElementById("reserveBtn");
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");

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



function showStep(step){

document.querySelectorAll(".step").forEach(s=>{
s.classList.remove("active");
});

document.getElementById(step).classList.add("active");

}



document.querySelectorAll(".people").forEach(btn=>{
btn.onclick = ()=>{
showStep("step2");
};
});



document.querySelectorAll(".next")[0].onclick = ()=>{
showStep("step3");
};

document.querySelectorAll(".next")[1].onclick = ()=>{
showStep("step4");
};



document.getElementById("bookNow").onclick = ()=>{
showStep("step5");
};



const swiper = new Swiper(".reviewSwiper",{

loop:true,
autoplay:{delay:3000}

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



const galleryImages=document.querySelectorAll(".gallery-img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");

galleryImages.forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex";
lightboxImg.src=img.src;
};
});

lightbox.onclick=()=>{
lightbox.style.display="none";
};