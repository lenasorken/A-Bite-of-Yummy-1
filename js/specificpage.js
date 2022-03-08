const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const fullView = document.querySelector(".specific-full");
const html = document.querySelector(".specific");
const url = "https://lfs.one/abiteofyummy/wp-json/wp/v2/posts" + "/" + id;
const imgURL = "https://lfs.one/abiteofyummy/wp-json/wp/v2/media" + "/";
async function getSpecific() {
    try {
        const callPost = await fetch(url);
        const post = await callPost.json();
        const imageID = `${post.featured_media}`;
        const callImage = await fetch(imgURL + imageID);
        const image = await callImage.json();
        document.title = `${post.title.rendered}`;
        html.innerHTML = '';
        fullView.innerHTML += `<img id="specific-imageFull" alt="${post.title.rendered}" src="${image.source_url}">`;
        html.innerHTML += `
        <div class="specific-container">
        <h3 class="specific-title">${post.title.rendered}</h3>
        <img id="specific-image" alt="${post.title.rendered}" src="${image.source_url}">
        <div class="specific-recipe">${post.content.rendered}</div>
        </div>
        ` 
    } catch(error) {
        console.log(error);
        html.innerHTML = displayError("An error has occured", error);
    }
}
getSpecific();

const button = document.querySelector("#full-button");
const closeButton = document.querySelector(".hide-image");

button.onclick = function fullscreen() {
    fullView.style.display = "block";
    html.style.opacity = "0.3";
    closeButton.style.display = "flex";
}

closeButton.onclick = function closeImage() {
    fullView.style.display = "none";
    html.style.opacity = "1";
    closeButton.style.display = "none";
}