console.log("working...");


const images=document.querySelectorAll('.card-image');

images.forEach((image) => {
    image.addEventListener("click", function(){
        image.classList.toggle("flip-card");
    })
});