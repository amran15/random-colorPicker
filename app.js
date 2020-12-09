//selecting button
const button = document.querySelector("button");
//selecting h1
const h1 = document.querySelector("h1");

//randomColor function 
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
};
//adding eventlistener so that color is randomized whenever button is clicked by user 
button.addEventListener("click", randomColor);