const modal=document.getElementById("bookingModal")
const reserveBtn=document.getElementById("reserveBtn")
const floatingBtn=document.getElementById("floatingBtn")
const close=document.querySelector(".close")

reserveBtn.onclick=()=>modal.style.display="flex"
floatingBtn.onclick=()=>modal.style.display="flex"

close.onclick=()=>modal.style.display="none"

window.onclick=(e)=>{
if(e.target==modal){
modal.style.display="none"
}
}


const step1=document.getElementById("step1")
const step2=document.getElementById("step2")
const step3=document.getElementById("step3")
const step4=document.getElementById("step4")
const confirmation=document.getElementById("confirmation")


document.querySelectorAll(".people").forEach(btn=>{
btn.onclick=()=>{
step1.classList.add("hidden")
step2.classList.remove("hidden")
}
})


date.onchange=()=>{
step2.classList.add("hidden")
step3.classList.remove("hidden")
}


time.onchange=()=>{
step3.classList.add("hidden")
step4.classList.remove("hidden")
}


bookNow.onclick=()=>{

step4.classList.add("hidden")

confirmation.classList.remove("hidden")

confirmation.innerHTML=
`
Your table request has been received.<br><br>
For confirmation please call this number:<br>
<strong>09660257312</strong>
`

}


const swiper=new Swiper(".review-slider",{
loop:true,
autoplay:{
delay:3500
}
})


document.querySelectorAll(".gallery-img").forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex"
lightboxImg.src=img.src
}
})

lightbox.onclick=()=>{
lightbox.style.display="none"
}


const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
})

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el)
})