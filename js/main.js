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

const consoleWatermark =
	"\n\n\t█░█░█ █▀▀ █░░ █▀▀ █▀█ █▀▄▀█ █▀▀   ▀█▀ █▀█\n\t▀▄▀▄▀ ██▄ █▄▄ █▄▄ █▄█ █░▀░█ ██▄   ░█░ █▄█\n\n░█████╗░███╗░░██╗░█████╗░░█████╗░░██████╗██╗░░██╗███████╗██╗░░██╗░░░██╗███╗░░██╗███████╗░█████╗░\n██╔══██╗████╗░██║██╔══██╗██╔══██╗██╔════╝██║░░██║██╔════╝██║░░██║░░░██║████╗░██║██╔════╝██╔══██╗\n███████║██╔██╗██║██║░░██║██║░░██║╚█████╗░███████║█████╗░░███████║░░░██║██╔██╗██║█████╗░░██║░░██║\n██╔══██║██║╚████║██║░░██║██║░░██║░╚═══██╗██╔══██║██╔══╝░░██╔══██║░░░██║██║╚████║██╔══╝░░██║░░██║\n██║░░██║██║░╚███║╚█████╔╝╚█████╔╝██████╔╝██║░░██║███████╗██║░░██║██╗██║██║░╚███║██║░░░░░╚█████╔╝\n╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚════╝░╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝╚═╝╚═╝░░╚══╝╚═╝░░░░░░╚════╝░\n\n";

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

function projectTemplating(
	address,
	ghRepoAddress,
	mediaSource,
	description,
	mediaType = "video"
) {
	const project = document.createElement("div");
	project.classList.add("project");
	if (mediaType === "video") {
		const projectVideo = document.createElement("video");
		projectVideo.src = mediaSource;
		projectVideo.playsInline = true;
		projectVideo.loop = true;
		projectVideo.play();
		project.appendChild(projectVideo);
	} else if (mediaType === "img") {
		const projectImgObject = document.createElement("object");
		projectImgObject.data = mediaSource;
		projectImgObject.type = "image/png";
		const projectImage = document.createElement("img");
		projectImage.src = "../img/img-not-loaded.png";
		projectImgObject.appendChild(projectImage);
		project.appendChild(projectImgObject);
	}
	const projectDescription = document.createElement("p");
	projectDescription.textContent = description;
	project.appendChild(projectDescription);
	const buttonsContainer = document.createElement("div");
	const pDemoButton = document.createElement("a");
	pDemoButton.href = address;
	pDemoButton.target = "_blank";
	pDemoButton.textContent = "Demo Page ->";
	buttonsContainer.appendChild(pDemoButton);
	const pGithubButton = document.createElement("a");
	pGithubButton.href = ghRepoAddress;
	pGithubButton.target = "_blank";
	pGithubButton.textContent = "Github Repo ->";
	buttonsContainer.appendChild(pGithubButton);
	project.appendChild(buttonsContainer);
	return project;
}

function loadProject(siteContent) {
	contentSection.textContent = "";
	contentSection.classList = "item projects";
	const projectsWrapper = document.createElement("div");
	projectsWrapper.classList.add("project-wrapper", "w-100");
	contentSection.appendChild(projectsWrapper);
	siteContent["projects"].forEach((project) => {
		projectsWrapper.appendChild(
			projectTemplating(
				project["address"],
				project["gh-repo-address"],
				project["media-source"],
				project["description"],
				project["media-type"]
			)
		);
	});
}

function createBanner() {
	const animatedBanner = document.createElement("div");
	animatedBanner.className = "animated-banner w-100";
	let hiContainerSpan = document.createElement("span");
	hiContainerSpan.className = "hi-languages";
	animatedBanner.appendChild(hiContainerSpan);
	contentSection.appendChild(animatedBanner);
	let nthHi = 0;
	let currentHi = hiInElevenLanguages[nthHi].toLocaleUpperCase();

	function appendChar(index) {
		if (index < currentHi.length) {
			hiContainerSpan.textContent += currentHi[index];
			setTimeout(() => appendChar(index + 1), 350);
		} else {
			if (nthHi === hiInElevenLanguages.length) nthHi = 0;
			nthHi++;
			currentHi = hiInElevenLanguages[nthHi]?.toLocaleUpperCase();
			index = 0;
			setTimeout(() => {
				hiContainerSpan.textContent = "";
				appendChar(index);
			}, 1500);
		}
	}
	setTimeout(() => appendChar(0), 100);
}

function loadHome(siteContent) {
	contentSection.innerHTML = null;
	contentSection.classList = "item content";
	createBanner();
	for (let eachElement of siteContent["home"]) {
		if (eachElement["type"] === "text") {
			const contentText = document.createElement("div");
			contentText.className = "w-100";
			contentText.textContent = eachElement["data"];
			contentSection.appendChild(contentText);
		} else if (eachElement["type"] === "image") {
			const contentImage = document.createElement("img");
			contentImage.src = eachElement["data"];
			contentSection.appendChild(contentImage);
		} else if (eachElement["type"] === "link") {
			const contentContainer = document.createElement("div");
			contentContainer.className = "w-100";
			const description = document.createElement("p");
			description.textContent = eachElement["p-data"];
			contentContainer.appendChild(description);
			const button = document.createElement("a");
			button.href = eachElement["a-url"];
			button.textContent = eachElement["a-data"];
			contentContainer.appendChild(button);
			contentSection.appendChild(contentContainer);
		}
	}
	const githubCalendar = document.createElement("div");
	githubCalendar.id = "calendar-component";
	contentSection.append(githubCalendar);

	// /*  GitHub Calendar
	//  *   Forked from: https://github.com/Bloggify/github-calendar
	//  *   CSS is modified in main.css:270
	//  */
	// const githubCalendarContainer = document.createElement("div");
	// githubCalendarContainer.className = "calendar-container";
	// const githubCalendar = document.createElement("div");
	// githubCalendar.className = "calendar";
	// const githubCalendarHeader = document.createElement("h2");
	// githubCalendarHeader.textContent = "GitHub Contributions";
	// githubCalendarContainer.appendChild(githubCalendarHeader);
	// githubCalendarContainer.appendChild(githubCalendar);
	// contentSection.appendChild(githubCalendarContainer);
	// GitHubCalendar(".calendar", "imananoosheh", { responsive: true });
}
function load404() {
	contentSection.innerHTML = null;
	const container404 = document.createElement("div");
	container404.textContent = "404";
	container404.className = "text-404 w-100";
	contentSection.appendChild(container404);
	const subTitle404 = document.createElement("div");
	subTitle404.textContent = "This page is not found.";
	subTitle404.className = "sub-text-404 w-100";
	contentSection.appendChild(subTitle404);
}

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

	console.log(`%c${consoleWatermark}`, "color:#0f0");
}
setup();
