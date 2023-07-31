const popups = document.querySelectorAll(".popup");
const popup = document.querySelector(".output");
const popmessage = document.querySelector(".message");
const closebutton = document.querySelector(".close");


closebutton.addEventListener("click",function(){
  popup.classList.add("hide");
})
for(let i = 0; i < popups.length; i++){
  popups[i].addEventListener("click",function(){
    let outputText = this.getAttribute("data-message");
    message(outputText);

  })
}


function message(output){
  popup.classList.remove("hide");
  popmessage.innerText = output;

}