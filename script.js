const slider = document.querySelector(".slider");

const colorEmpty = getComputedStyle(document.documentElement).getPropertyValue("--LightGrayishBlueEmptySliderBar");
const colorFull = getComputedStyle(document.documentElement).getPropertyValue("--SoftCyanFullSliderBar");

const views = document.querySelector(".views");
const price = document.querySelector(".price");
const toggle = document.getElementById("toggle");
const type = document.querySelector(".type");

var togglestate = toggle.checked;

var val = 0;

const pricing = {
    "0k": 0, 
    "10k": 8,
    "50k": 12,
    "100k": 16,
    "500k": 24,
    "1m": 36
}

toggle.addEventListener("change", function(){
    togglestate = toggle.checked;
    togglestate ? type.textContent = "/ year" : type.textContent = "/ month";
    myfunction1();
})
slider.oninput = function(){
    val = parseInt(slider.value);
    var percentage = parseInt(val) * 10;
    slider.style.background = `linear-gradient(90deg, ${colorFull} ${percentage}%, ${colorEmpty} ${percentage}%)`
    console.log(togglestate);
    myfunction1();
}

function myfunction1(){
    if(val == 0){
        views.textContent = Object.keys(pricing)[0];
        myfunction(pricing["0k"]);
    }
    if(val == 2){
        views.textContent = Object.keys(pricing)[1];
        myfunction(pricing["10k"]);
    }
    if(val == 4){
        views.textContent = Object.keys(pricing)[2];
        myfunction(pricing["50k"]);
    }
    if(val == 6){
        views.textContent = Object.keys(pricing)[3];
        myfunction(pricing["100k"]);
    }
    if(val == 8){
        views.textContent = Object.keys(pricing)[4];
        myfunction(pricing["500k"]);
    }
    if(val == 10){
        views.textContent = Object.keys(pricing)[5];
        myfunction(pricing["1m"]);
    }
}
function myfunction(vall){
    if(togglestate){
        const yearlyprice = (parseFloat(vall) * 12);
        const realprice = yearlyprice - (yearlyprice * 0.25)
        price.textContent = realprice.toFixed(2);
    }
    else{
        price.textContent = parseFloat(vall).toFixed(2);
    }
}