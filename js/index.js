const allKeyDivs=document.querySelectorAll(".letter-area");
allKeyDivs.forEach(div =>div.addEventListener('transitionend',function(e){
    if(e.propertyName!=="transform"){
        return;
    }
    this.classList.remove("playing");
}));

window.addEventListener("keydown",function(e){
    const keyPress=e.keyCode;
    const audio=document.querySelector(`audio[data-key="${keyPress}"]`);
    if (!audio){
        return;
    }
    const keyDiv=document.querySelector(`.letter-area[data-key="${keyPress}"]`);
    audio.currentTime=0;
    audio.play();
    keyDiv.classList.add("playing");
});