// =========================
// SANJIT BLOG SCRIPT
// =========================


document.addEventListener("DOMContentLoaded", function(){



// =========================
// Sticky Header
// =========================

const header = document.querySelector("header");


if(header){

window.addEventListener("scroll",()=>{


if(window.scrollY > 80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}


});


}






// =========================
// Smooth Scroll
// =========================


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",function(e){


const href=this.getAttribute("href");


if(href === "#" || !href){

return;

}



const target=document.querySelector(href);



if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});






// =========================
// Search Button
// =========================


const searchBtn=document.querySelector(".search-box button");

const searchInput=document.querySelector(".search-box input");



if(searchBtn && searchInput){



searchBtn.addEventListener("click",()=>{


const value=searchInput.value.trim();



if(value===""){


alert("Please enter something to search.");


}else{


searchInput.dispatchEvent(
new Event("keyup")
);


}



});





searchInput.addEventListener("keypress",(e)=>{


if(e.key==="Enter"){

searchBtn.click();

}


});


}






// =========================
// Card Hover Animation
// =========================


document.querySelectorAll(".card").forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.transform="translateY(-12px)";


});



card.addEventListener("mouseleave",()=>{


card.style.transform="translateY(0)";


});


});








// =========================
// Scroll To Top
// =========================


let topBtn=document.getElementById("topBtn");



if(!topBtn){


topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);


}




window.addEventListener("scroll",()=>{


topBtn.style.display =
window.scrollY > 400 ? "block":"none";


});



topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});








// =========================
// Fade Animation
// =========================


const elements=document.querySelectorAll(
".card,.featured,.small-post"
);



if(elements.length && "IntersectionObserver" in window){



const observer=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


});



elements.forEach(el=>{


el.classList.add("hidden");

observer.observe(el);


});


}








// =========================
// Active Navigation
// =========================


document.querySelectorAll("nav a").forEach(link=>{


if(link.href === window.location.href){


link.classList.add("active");


}


});








// =========================
// Dark Mode
// =========================


const darkBtn=document.getElementById("darkMode");



if(darkBtn){



const savedMode=localStorage.getItem("darkMode");



if(savedMode==="on"){

document.body.classList.add("dark");

}




darkBtn.addEventListener("click",()=>{


document.body.classList.toggle("dark");



localStorage.setItem(

"darkMode",

document.body.classList.contains("dark")
?"on":"off"

);


});


}







// =========================
// Loader
// =========================


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


const loader=document.getElementById("loader");


if(loader){

loader.style.display="none";

}


});








// =========================
// Progress Bar
// =========================


const progress=document.getElementById("progressBar");



window.addEventListener("scroll",()=>{


if(!progress) return;



const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;



if(height > 0){


const scrolled =
(document.documentElement.scrollTop / height) * 100;



progress.style.width=scrolled+"%";


}



});









// =========================
// Newsletter
// =========================


const subscribe=document.getElementById("subscribeBtn");



if(subscribe){


subscribe.addEventListener("click",()=>{


const email=document.getElementById("newsletterEmail");



if(!email || email.value.trim()===""){


alert("Please enter your email.");


}else{


alert("Thanks for subscribing!");


email.value="";


}


});


}







// =========================
// Mobile Menu
// =========================


const menu=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");



if(menu && nav){



menu.addEventListener("click",()=>{


nav.classList.toggle("show");


});



document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",()=>{


nav.classList.remove("show");


});


});


}





console.log("SANJIT BLOG Loaded Successfully");


});