// Hamberger Menu intractions
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".nav-logo");
const copyRight = document.querySelector('[data-copyright]')
const currentYear = new Date().getFullYear()
const projectsPageButton = document.querySelector('[data-projects]')
const homePageButton = document.querySelector('[data-home]')
const contentSection = document.querySelector('[data-content-section]')

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

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
copyRight.textContent = `Copyright © 2015-${currentYear} | Iman Anooshehpour All Rights Reserved.`

let siteContent = null
async function fetchSiteContent(){
    let siteContentResponse = await fetch('/js/content.json', {method: 'GET'});
    siteContent = await siteContentResponse.json();
}
fetchSiteContent();

function projectTemplating(address, demoVideoAddress, description){
    const project = document.createElement('div')
    project.classList.add('project')
    const projectVideo = document.createElement('video')
    projectVideo.src = demoVideoAddress
    projectVideo.autoplay = true
    projectVideo.loop = true
    project.appendChild(projectVideo)
    const projectDescription = document.createElement('p')
    projectDescription.textContent = description
    project.appendChild(projectDescription)
    const projectButton = document.createElement('a')
    projectButton.href = address
    projectButton.target = "_blank"
    projectButton.textContent = 'Take Me There! ->'
    project.appendChild(projectButton)
    return project
}    

projectsPageButton.addEventListener('click', async ()=>{
    
    contentSection.textContent = ''
    const projectsWrapper = document.createElement('div')
    projectsWrapper.classList.add('project-wrapper')
    contentSection.appendChild(projectsWrapper)
    siteContent["projects"].forEach(project => {
        projectsWrapper.appendChild(projectTemplating(project["address"],project["demo-video"],project["description"]))
    })
})

function loadHome(){
    contentSection.textContent = siteContent["home"]["text"]
}

homePageButton.addEventListener('click', loadHome)