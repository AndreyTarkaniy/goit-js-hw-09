function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const startBtnColor = document.querySelector('button[data-start]');
const stopBtnColor = document.querySelector('button[data-stop]');
const backgroundColor = document.querySelector("body");

startBtnColor.addEventListener("click", handleChangeColorClick);
stopBtnColor.addEventListener("click", handleStopColorClick)

function colorRandom(){
    backgroundColor.style.backgroundColor = getRandomHexColor()
}

function handleChangeColorClick() {
    intervalId = setInterval(colorRandom, 1000)

    if (intervalId){
       startBtnColor.disabled = true;
       stopBtnColor.disabled = false;
     ;
    }
    
}

function handleStopColorClick(){
    clearInterval(intervalId);
    startBtnColor.disabled = false;
    stopBtnColor.disabled = true;
}



    
    