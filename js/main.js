"use strict";
//Checking if URL redirected from 404 page
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

// Hamberger Menu intractions
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".nav-logo");

//  Footer Setup
const copyRight = document.querySelector("[data-copyright]");
const currentYear = new Date().getFullYear();
copyRight.textContent = `Copyright © 2015-${currentYear} | Iman Anooshehpour All Rights Reserved.`;

//  Navigation buttons
const projectsPageButton = document.querySelector("[data-projects]");
const homePageButton = document.querySelector("[data-home]");

const contentSection = document.querySelector("[data-content-section]");
const hiInElevenLanguages = [
    "Dorud",
    "Hello",
    "Hola",
    "Bonjour",
    "nǐn hǎo",
    "Guten tag",
    "Salve",
    "olá",
    "asalaam alaikum",
    "konnichiwa",
    "anyoung haseyo",
    "Zdravstvuyte",
];


//  Setup function retrieve data and populates
async function setup() {
    //  Fetching data from JSON file
    let siteContentResponse = await fetch("/js/content.json", {
        method: "GET",
    });
    const siteContent = await siteContentResponse.json();

    if (params.get("data") === "404") {
        // setTimeout(load404, 300);
        load404();
    } else {
        // setTimeout(loadHome(siteContent), 300);
        loadHome(siteContent);
    }
    
    // Buttons functionality
    projectsPageButton.addEventListener("click", () => {
        loadProject(siteContent);
    });
    // console.log(projectsPageButton,siteContent)
    homePageButton.addEventListener("click", () => {
        loadHome(siteContent);
    });
}
setup();

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLogo.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navLogo.classList.remove("active");
}

function projectTemplating(address, mediaSource, description, mediaType='video') {
    const project = document.createElement("div");
    project.classList.add("project");
    if (mediaType==='video'){
        const projectVideo = document.createElement("video");
        projectVideo.src = mediaSource;
        projectVideo.playsInline = true;
        projectVideo.loop = true;
        projectVideo.play();
        project.appendChild(projectVideo);
    } else if(mediaType==='img'){
        const projectImage = document.createElement('img')
        projectImage.src = mediaSource
        project.appendChild(projectImage)
    }
    const projectDescription = document.createElement("p");
    projectDescription.textContent = description;
    project.appendChild(projectDescription);
    const projectButton = document.createElement("a");
    projectButton.href = address;
    projectButton.target = "_blank";
    projectButton.textContent = "Take Me There! ->";
    project.appendChild(projectButton);
    return project;
}

function loadProject(siteContent) {
    contentSection.textContent = "";
    contentSection.classList = 'item projects'
    const projectsWrapper = document.createElement("div");
    projectsWrapper.classList.add("project-wrapper");
    contentSection.appendChild(projectsWrapper);
    siteContent["projects"].forEach((project) => {
        projectsWrapper.appendChild(
            projectTemplating(
                project["address"],
                project["media-source"],
                project["description"],
                project["media-type"]
            )
        );
    });
}

function createBanner() {
    const animatedBanner = document.createElement("div");
    animatedBanner.className = "animated-banner";
    let hiContainerSpan = document.createElement("span");
    hiContainerSpan.className = "hi-languages";
    animatedBanner.appendChild(hiContainerSpan);
    contentSection.appendChild(animatedBanner);
    let nthHi = 0;
    let currentHi = hiInElevenLanguages[nthHi].toLocaleUpperCase();

    function appendChar(index) {
        if (index < currentHi.length) {
            hiContainerSpan.textContent += currentHi[index];
            setTimeout(() => appendChar(index + 1), 500);
        } else {
            // hiContainerSpan.textContent = ''
            if (nthHi === hiInElevenLanguages.length) nthHi = 0;
            currentHi = hiInElevenLanguages[nthHi++].toLocaleUpperCase();
            index = 0;
            setTimeout(() => {
                hiContainerSpan.textContent = "";
                appendChar(index);
            }, 2000);
        }
    }
    setTimeout(() => appendChar(0), 100);
}

function loadHome(siteContent) {
    contentSection.innerHTML = null;
    contentSection.classList = 'item content'
    createBanner();
    for (let eachElement of siteContent["home"]) {
        if (eachElement["type"] === "text") {
            const contentText = document.createElement("div");
            contentText.textContent = eachElement["data"];
            contentSection.appendChild(contentText);
        }else if (eachElement["type"] === "image") {
            const contentImage = document.createElement("img");
            contentImage.src = eachElement["data"];
            contentSection.appendChild(contentImage);
        }else if (eachElement["type"] === "link"){
            const contentContainer = document.createElement("div")
            const description = document.createElement("p")
            description.textContent = eachElement["p-data"]
            contentContainer.appendChild(description)
            const button = document.createElement('a')
            button.href = eachElement['a-url']
            button.textContent = eachElement['a-data']
            contentContainer.appendChild(button)
            contentSection.appendChild(contentContainer)
        }
    }
}
function load404() {
    contentSection.innerHTML = null;
    const container404 = document.createElement("div");
    container404.textContent = "404";
    container404.className = "text-404";
    contentSection.appendChild(container404);
    const subTitle404 = document.createElement("div");
    subTitle404.textContent = "This page is not found.";
    subTitle404.className = "sub-text-404";
    contentSection.appendChild(subTitle404);
}
