//dark/light mode

const switchThemeBtn = document.querySelector('.btn-toggle')
let toggleTheme = true;

switchThemeBtn.addEventListener('click', () => {

    if(toggleTheme){
        document.documentElement.style.setProperty('--main-color', '#FFFFFF')
        document.documentElement.style.setProperty('--secondary-color', '#FAF7FF')
        document.documentElement.style.setProperty('--third-color', '#8685EF')
        document.documentElement.style.setProperty('--thrid-color-hover', '#5452d1')
        document.documentElement.style.setProperty('--font-color', '#131313')
        document.documentElement.style.setProperty('--opacity-1', '0')
        document.documentElement.style.setProperty('--opacity-2', '1')
        document.documentElement.style.setProperty('--cursor-color', '#131313')

        toggleTheme=!toggleTheme
    }else{
        document.documentElement.style.setProperty('--main-color', '#131313')
        document.documentElement.style.setProperty('--secondary-color', '#161616')
        document.documentElement.style.setProperty('--third-color', '#7E3B9C')
        document.documentElement.style.setProperty('--thrid-color-hover', '#521d6b')
        document.documentElement.style.setProperty('--font-color', '#FAF7FF')
        document.documentElement.style.setProperty('--opacity-1', '1')
        document.documentElement.style.setProperty('--opacity-2', '0')
        document.documentElement.style.setProperty('--cursor-color', '#FAF7FF')

        toggleTheme=!toggleTheme
    }
})


//question section

const question1 = document.querySelector('.question1')
const question2 = document.querySelector('.question2')

document.documentElement.style.setProperty('--border-2', 'solid hsla(0, 0, 0, 0)')
document.documentElement.style.setProperty('--border-1', 'solid hsla(0, 0, 0, 0)')

question1.addEventListener('click', () => {
    document.getElementById('awnser').innerHTML='Since high school, I have been passionate about self-learning, using resources like YouTube videos and online courses, and applying what I\'ve learned through personal projects. This independent learning approach is why I chose Epitech. Epitech not only encourages self-directed learning but also provides the freedom to work on personal projects, while rewarding initiative and creativity. The school\'s emphasis on autonomy and practical, hands-on experience aligns perfectly with my own learning style, and offers the ideal environment to continue growing as a developer.'
    if (toggleTheme)
        document.documentElement.style.setProperty('--border-2', 'solid #FAF7FF')
    else 
        document.documentElement.style.setProperty('--border-2', 'solid #131313')
    document.documentElement.style.setProperty('--border-1', 'solid hsla(0, 0, 0, 0)')
})

question2.addEventListener('click', () => {
    document.getElementById('awnser').innerHTML='I love programming because it offers an accessible and powerful way to solve real-world problems. With just a computer and the knowledge that anyone can acquire, programming allows me to create solutions that can have a tangible impact. The ability to turn ideas into reality, using logic and creativity, is what makes programming fulfilling and exciting to me.'
    document.documentElement.style.setProperty('--border-2', 'solid hsla(0, 0, 0, 0)')
    if (toggleTheme)
        document.documentElement.style.setProperty('--border-1', 'solid #FAF7FF')
    else 
        document.documentElement.style.setProperty('--border-1', 'solid #131313')
})

//animations skills graph visible

window.addEventListener('scroll', function () {
    var element1 = document.querySelector('.element1')
    var element2 = document.querySelector('.element2')
    var element3 = document.querySelector('.element3')
    var element4 = document.querySelector('.element4')
    var element5 = document.querySelector('.element5')
    var position1 = element1.getBoundingClientRect()
    var position2 = element2.getBoundingClientRect()
    var position3 = element3.getBoundingClientRect()
    var position4 = element4.getBoundingClientRect()
    var position5 = element5.getBoundingClientRect()

    if ((position1.top < window.innerHeight && position1.bottom >= 0))
        element1.classList.add('visible')
    if ((position2.top < window.innerHeight && position2.bottom >= 0))
        element2.classList.add('visible')
    if ((position3.top < window.innerHeight && position3.bottom >= 0))
        element3.classList.add('visible')
    if ((position4.top < window.innerHeight && position4.bottom >= 0))
        element4.classList.add('visible')
    if ((position5.top < window.innerHeight && position5.bottom >= 0))
        element5.classList.add('visible')
})


//souris/pas souris

let mouseUsed = true

if(mouseUsed){

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', function (e) {
    
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: 'forwards'});

})

//cursor hover links
let links = document.querySelectorAll('a');
let qN = document.querySelectorAll('.question');

links.forEach(function(elem) {
    elem.addEventListener('mouseenter', function () {
        cursorOutline.animate({
            width: '15px',
            height: '15px'
        }, { duration: 100, fill: 'forwards'});
    }) 
    elem.addEventListener('mouseleave', function () {
        cursorOutline.animate({
            width: '30px',
            height: '30px'
        }, { duration: 100, fill: 'forwards'});
    }) 
});

qN.forEach(function(elem) {
    elem.addEventListener('mouseenter', function () {
        cursorOutline.animate({
            width: '15px',
            height: '15px'
        }, { duration: 100, fill: 'forwards'});
    }) 
    elem.addEventListener('mouseleave', function () {
        cursorOutline.animate({
            width: '30px',
            height: '30px'
        }, { duration: 100, fill: 'forwards'});
    }) 
});

//cursor invisibe when not on window

const body = document.querySelector('body');

body.addEventListener('mouseenter', function () {
    cursorOutline.animate({
        opacity: '0.7'
    }, { duration: 500, fill: 'forwards'});
    cursorDot.animate({
        opacity: '1'
    }, { duration: 1, fill: 'forwards'});
}) 
body.addEventListener('mouseleave', function () {
    cursorOutline.animate({
        opacity: '0'
    }, { duration: 500, fill: 'forwards'});
    cursorDot.animate({
        opacity: '0'
    }, { duration: 1, fill: 'forwards'});
}) 
body.addEventListener('mousemove', function () {
    cursorOutline.animate({
        opacity: '0.7'
    }, { duration: 500, fill: 'forwards'});
    cursorDot.animate({
        opacity: '1'
    }, { duration: 1, fill: 'forwards'});
}) 

//cursor change color when certification hover (only on dark mode)

const certification = document.querySelectorAll('.cursor-color-change1');


certification.forEach(function(elem) {
    elem.addEventListener('mouseenter', function () {
        if(toggleTheme){
            document.documentElement.style.setProperty('--cursor-color', '#131313')
        }
    }) 
    elem.addEventListener('mouseleave', function () {
        if(toggleTheme){
            document.documentElement.style.setProperty('--cursor-color', '#FAF7FF')
        }
    }) 
});

const projectImages = document.querySelectorAll('.cursor-color-change2');

projectImages.forEach(function(elem) {
    elem.addEventListener('mouseenter', function () {
        if(!toggleTheme){
            document.documentElement.style.setProperty('--cursor-color', '#FAF7FF')
        }
    }) 
    elem.addEventListener('mouseleave', function () {
        if(!toggleTheme){
            document.documentElement.style.setProperty('--cursor-color', '#131313')
        }
    }) 
});

//animations effect cursor


body.addEventListener('mousedown', function () {
    cursorOutline.animate({
        width: '0px',
        height: '0px'
    }, { duration: 100, fill: 'both'});
}) 
body.addEventListener('mouseup', function () {
    cursorOutline.animate({
        width: '30px',
        height: '30px'
    }, { duration: 500, fill: 'both'});
}) 

}else{
    const cursorDot = document.querySelector('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');
    const container = document.getElementById('container');
    container.removeChild(cursorDot);
    container.removeChild(cursorOutline);
    cursorOutline.animate({
        width: '0px',
        height: '0px',
        opacity: '0'
    }, { duration: 1, fill: 'auto'});
    cursorDot.animate({
        width: '0px',
        height: '0px',
        opacity: '0'
    }, { duration: 1, fill: 'auto'});
}