
let displayBox = document.querySelector(".display");

function showDisplay (event) {

    const x = event.target.innerText;
 
    if (displayBox.innerHTML == 0){
return displayBox.innerHTML = x ;

    }else{
        return displayBox.innerHTML += x;
    }

}

function calc (event) {
let result =  displayBox.innerText;
displayBox.innerText = eval(result);



}
 function allClear(){
displayBox.innerText = 0;
 
}
function clear () {
let text = displayBox.innerText;
if(text.length === 1 ) {
displayBox.innerHTML = 0;
}else {
    displayBox.innerText = text.substring(0, text.length - 1);
}
}

document.querySelector(".calculate").addEventListener("click", calc);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);

let list = document.querySelectorAll(".show-display");
list.forEach(item => {
item.addEventListener("click", showDisplay);
})


