//selecting button
const button = document.querySelector("button");
//selecting h1
const h1 = document.querySelector("h1");

//adding eventlistener so that color is randomized whenever button is clicked by user 
button.addEventListener("click", function(){
    const newColor = randomColor();   
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

//randomColor function 
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const sum = r + g + b;
    if (sum < 300 ){
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
    return  `rgb(${r}, ${g}, ${b})`;
}