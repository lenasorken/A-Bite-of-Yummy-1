const url = "https://lfs.one/abiteofyummy/wp-json/wp/v2/posts";
const imgURL = "https://lfs.one/abiteofyummy/wp-json/wp/v2/media";
const html = document.querySelector(".posts");

const buttonOne = document.querySelector("#home-button1");
const buttonTwo = document.querySelector("#home-button2");
const buttonThree = document.querySelector("#home-button3");

async function getPostImg() {
    try {
        const fetchPost = await fetch(url);
        const fetchAPI = await fetch(imgURL);
        const callPost = await fetchPost.json();
        const postImage = await fetchAPI.json();
        buttonOne.style.backgroundColor = "#f1657c";
        html.innerHTML= ``;
        for(let i = 0; i < 4; i++) {
            html.innerHTML += 
            `<div class="post-container">
            <a href="/html/specificpage.html?id=${callPost[i].id}"><h3 class="post-title">${callPost[i].title.rendered}</h3></a>
            <a href="/html/specificpage.html?id=${callPost[i].id}">
            <div class="post-image">
            <img src="${postImage[i].source_url}">
            </div></a>
            </div>`;
        }
    } catch (error) {
        console.log("An error occured!");
        html.innerHTML = displayError("An error occured!", error);
    }
} 
getPostImg();

async function getPostImg2() {
        try {
            const fetchPost = await fetch(url);
            const fetchAPI = await fetch(imgURL);
            const callPost = await fetchPost.json();
            const postImage = await fetchAPI.json();
            html.innerHTML= ``;
            for(let i = 4; i < 8; i++) {
                html.innerHTML += 
                `<div class="post-container">
                <a href="/html/specificpage.html?id=${callPost[i].id}"><h3 class="post-title">${callPost[i].title.rendered}</h3></a>
                <a href="/html/specificpage.html?id=${callPost[i].id}">
                <div class="post-image">
                <img src="${postImage[i].source_url}">
                </div></a>
                </div>`;
            }
        } catch (error) {
            console.log("An error occured!");
            html.innerHTML = displayError("An error occured!", error);
        }
    }

async function getPostImg3() {
        try {
            const fetchPost = await fetch(url);
            const fetchAPI = await fetch(imgURL);
            const callPost = await fetchPost.json();
            const postImage = await fetchAPI.json();
            html.innerHTML= ``;
            for(let i = 8; i < postImage.length; i++) {
                html.innerHTML += 
                `<div class="post-container">
                <a href="/html/specificpage.html?id=${callPost[i].id}"><h3 class="post-title">${callPost[i].title.rendered}</h3></a>
                <a href="/html/specificpage.html?id=${callPost[i].id}">
                <div class="post-image">
                <img src="${postImage[i].source_url}">
                </div></a>
                </div>`;
            }
        } catch (error) {
            console.log("An error occured!");
            html.innerHTML = displayError("An error occured!", error);
        }
    }

    buttonOne.onclick = function getSlide1() {
        buttonOne.style.backgroundColor = "#f1657c";
        buttonTwo.style.backgroundColor = "pink";
        buttonThree.style.backgroundColor = "pink";
        getPostImg();
    }
    buttonTwo.onclick = function getSlide2() {
        buttonOne.style.backgroundColor = "pink";
        buttonTwo.style.backgroundColor = "#f1657c";
        buttonThree.style.backgroundColor = "pink";
        getPostImg2();
    }
    buttonThree.onclick = function getSlide3() {
        buttonOne.style.backgroundColor = "pink";
        buttonTwo.style.backgroundColor = "pink";
        buttonThree.style.backgroundColor = "#f1657c";
        getPostImg3();
    }