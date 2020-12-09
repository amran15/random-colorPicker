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
    if (r < 150 && g < 150 && b < 150 ){
        h1.style.color = 'white';
    }
    return  `rgb(${r}, ${g}, ${b})`;
}