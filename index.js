let container = document.getElementById("container");
let paragraph = document.querySelector(".container p");
let button = document.querySelector(".container button");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function getJoke(){
    paragraph.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        paragraph.textContent = `${item.joke}`;
        paragraph.classList.add("fade");
    })
}

button.addEventListener("click",getJoke);
getJoke();

