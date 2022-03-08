const url = "https://lfs.one/abiteofyummy/wp-json/wp/v2/posts";
const imgURL = "https://lfs.one/abiteofyummy/wp-json/wp/v2/media";
const html = document.querySelector(".posts-recipes");

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

console.log(params);

async function getPostImg() {
    try {
        const fetchPost = await fetch(url);
        const fetchAPI = await fetch(imgURL);
        const callPost = await fetchPost.json();
        const postImage = await fetchAPI.json();
        html.innerHTML = '';
        for(let i = 0; i < 4; i++) {
            html.innerHTML += 
            `<div class="post-recipe-container">
            <a href="specificpage.html?id=${callPost[i].id}"><h3 class="post-recipe-title">${callPost[i].title.rendered}</h3></a>
            <div class="post-recipe-image">
            <a id="recipe-image" href="specificpage.html?id=${callPost[i].id}">
            <img src="${postImage[i].source_url}">
            </a></div>
            </div>`;
        }
    } catch(error) {
        console.log(error);
        // html.innerHTML = displayError("An error has occured", error);
    }
}

getPostImg();

const button = document.querySelector("#recipe-button")

button.onclick = async function getPostImg2() {
    button.style.display = "none";
    try {
        const fetchPost = await fetch(url);
        const fetchAPI = await fetch(imgURL);
        const callPost = await fetchPost.json();
        const postImage = await fetchAPI.json();
        for(let i = 4; i < 8; i++) {
            html.innerHTML += 
            `<div class="post-recipe-container">
            <a href="specificpage.html?id=${callPost[i].id}"><h3 class="post-recipe-title">${callPost[i].title.rendered}</h3></a>
            <div class="post-recipe-image">
            <a id="recipe-image" href="specificpage.html?id=${callPost[i].id}">
            <img src="${postImage[i].source_url}">
            </a></div>
            </div>`;
        }
    } catch(error) {
        console.log(error);
        // html.innerHTML = displayError("An error has occured", error);
    }
}