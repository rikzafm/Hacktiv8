var box = document.querySelector(".box");
var button = document.querySelector(".button1");
var button2 = document.querySelector(".button2");


const showText = () => {
    let text = document.createElement("p");
    text.appendChild(document.createTextNode("Hi dari P"));
    box.append(text);
    text.classList.add("text");
}; 

const showImg = () => {
    var fishPic = document.createElement('img');
    fishPic.setAttribute('src', 'fish.jpeg');
    fishPic.setAttribute('width', '40');
    fishPic.setAttribute('height', '30');
    box.append(fishPic);
    fishPic.classList.add("fishPic");
}

const delClick = (e) => {
    if(e.target.className === "fishPic" || 
    e.target.className === "text"){
        e.target.remove();
    }
}

const smalsify = () => {
    document.querySelectorAll('p').forEach(e => e.style.textTransform = "lowercase");
} 

box.addEventListener("click", showText);
button.addEventListener("click", showImg)
box.addEventListener("mouseover", delClick);
button2.addEventListener("click", smalsify);
