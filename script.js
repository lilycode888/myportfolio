const aboutLink = document.getElementById('aboutLink')
const projectsLink = document.getElementById('projectsLink')
const resumeLink = document.getElementById('resumeLink')
const contactLink = document.getElementById('contactLink')
const banner = document.querySelector('.banner')
const navContainer = document.querySelector('.nav-container')
const nav = document.querySelector('.nav')
const container = document.querySelector('.container')
const aboutPage = document.querySelector('.about')
const contactPage = document.querySelector('.contact')
const projectsPage = document.querySelector('.projects')
const resumePage = document.querySelector('.resume')

document.addEventListener('DOMContentLoaded', () => {
    banner.classList.add('show')
    setTimeout(() => { nav.classList.add('show') }, 800)
    
    aboutPage.style.display = 'none'
    projectsPage.style.display = 'none'
    resumePage.style.display = 'none'
    contactPage.style.display = 'none'
})

aboutLink.addEventListener('click', () => {
    if (!container.classList.contains('show-content')) {
        container.classList.add('show-content')
    }

    if (banner.classList.contains('show')) {
        banner.classList.remove('show')
        setTimeout(() => {banner.style.display = 'none'}, 800)
    }
    

    if (contactPage.classList.contains('show')) {
        contactPage.classList.remove('show')
        setTimeout(() => {contactPage.style.display = 'none'}, 800)
        
    }

    if (projectsPage.classList.contains('show')) {
        projectsPage.classList.remove('show')
        setTimeout(() => {projectsPage.style.display = 'none'}, 800)
    }

    if (resumePage.classList.contains('show')) {
        resumePage.classList.remove('show')
        setTimeout(() => {resumePage.style.display = 'none'}, 800)
    }

   
    aboutPage.classList.add('show')
    setTimeout(() => {aboutPage.style.display = 'block'}, 800)
    
})

contactLink.addEventListener('click', () => {
    if (!container.classList.contains('show-content')) {
        container.classList.add('show-content')
    }

    if (banner.classList.contains('show')) {
        banner.classList.remove('show')
        banner.style.display = 'none'
    }

    if (aboutPage.classList.contains('show')) {
        aboutPage.classList.remove('show')
        setTimeout(() => {aboutPage.style.display = 'none'}, 800)
    }

    if (projectsPage.classList.contains('show')) {
        projectsPage.classList.remove('show')
        setTimeout(() => {projectPage.style.display = 'none'}, 800)
    }

    if (resumePage.classList.contains('show')) {
        resumePage.classList.remove('show')
        setTimeout(() => {resumePage.style.display = 'none'}, 800)
    }

    
    contactPage.classList.add('show')
    setTimeout(() => {contactPage.style.display = 'block'}, 800)
})

projectsLink.addEventListener('click', () => {
    if (!container.classList.contains('show-content')) {
        container.classList.add('show-content')
    }

    if (banner.classList.contains('show')) {
        banner.classList.remove('show')
        banner.style.display = 'none'
    }
    

    if (contactPage.classList.contains('show')) {
        contactPage.classList.remove('show')
        setTimeout(() => {contactPage.style.display = 'none'}, 800)
    }

    if (aboutPage.classList.contains('show')) {
        aboutPage.classList.remove('show')
        setTimeout(() => {aboutPage.style.display = 'none'}, 800)
    }

    if (resumePage.classList.contains('show')) {
        resumePage.classList.remove('show')
        setTimeout(() => {resumePage.style.display = 'none'}, 800)
    }

    projectsPage.classList.add('show')
    setTimeout(() => {projectsPage.style.display = 'flex'}, 800)


})

resumeLink.addEventListener('click', () => {
    if (!container.classList.contains('show-content')) {
        container.classList.add('show-content')
    }

    if (banner.classList.contains('show')) {
        banner.classList.remove('show')
        banner.style.display = 'none'
    }
    

    if (contactPage.classList.contains('show')) {
        contactPage.classList.remove('show')
        setTimeout(() => {contactPage.style.display = 'none'}, 800)
    }

    if (aboutPage.classList.contains('show')) {
        aboutPage.classList.remove('show')
        setTimeout(() => {contactPage.style.display = 'none'}, 800)
    }

    if (projectsPage.classList.contains('show')) {
        projectsPage.classList.remove('show')
        setTimeout(() => {projectsPage.style.display = 'none'}, 800)
    }

    resumePage.classList.add('show')
    setTimeout(() => {resumePage.style.display = 'block'}, 800)
})

