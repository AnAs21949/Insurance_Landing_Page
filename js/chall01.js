const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const linksContainer = document.querySelector(".links");

openBtn.addEventListener("click", function(){
    closeBtn.classList.add("show")
    openBtn.classList.add("hide")
    linksContainer.classList.add("show")
})
closeBtn.addEventListener("click", function(){
    closeBtn.classList.remove("show")
    openBtn.classList.remove("hide")
    linksContainer.classList.remove("show")
})


