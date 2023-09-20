
var imgs = Array.from(document.getElementsByClassName("img_item"))

var lightBoxContainer = document.getElementById("lightBoxContainer");
var close =document.getElementById("close");
var lightBoxItem =document.getElementById("lightBoxItem");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentSlideIndex = 0 ;

for (var i = 0; i < imgs.length; i++) {
// console.log(imgs[i])    
imgs[i].addEventListener("click", function(e){
    currentSlideIndex = imgs.indexOf(e.target)
lightBoxContainer.style.display ="flex"
var imgSrc = e.target.src
lightBoxItem.style.backgroundImage =`url(${imgSrc})`
})
}
close.addEventListener("click" ,closePage)
 function closePage(){
    lightBoxContainer.style.display ="none"
}
next.addEventListener("click" ,nextSlide)
    function nextSlide(){
currentSlideIndex++

if (currentSlideIndex == imgs.length) {
    currentSlideIndex = 0;
}

   var imgSrc = imgs[currentSlideIndex].src;
lightBoxItem.style.backgroundImage =`url(${imgSrc})` 
}
prev.addEventListener("click",prevSlide)
function prevSlide (){
    currentSlideIndex--

if (currentSlideIndex < 0) {
    currentSlideIndex = imgs.length - 1;
}
   var imgSrc = imgs[currentSlideIndex].src;
lightBoxItem.style.backgroundImage =`url(${imgSrc})` 
}

document.addEventListener("keydown" , function(e){
if (e.keyCode == 39 || e.keyCode == 32) {
nextSlide();
}
else if (e.keyCode == 37){
prevSlide();
}
else if(e.keyCode ==27){
closePage();
}

})
































// var imgs = document.getElementsByClassName("img_item");
// var lightBoxContainer = document.getElementById("lightBoxContainer");
// var close =document.getElementById("close");
// var lightBoxItem =document.getElementById("lightBoxItem");
// for (var i = 0; i < imgs.length; i++) {
// // console.log(imgs[i]);    
// imgs[i].addEventListener("click" ,function(e)
// {
//     lightBoxContainer.style.display="flex";
//     var img =e.target.src;
//     lightBoxItem.style.backgroundImage =`url(${e.target.src})`
// })
// }
// close.addEventListener("click" , closePage)
//     function closePage(){
//             lightBoxContainer.style.display="none";
//     }