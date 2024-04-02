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



question1.addEventListener('click', () => {
    document.getElementById('awnser').innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum porro quae fugit voluptatum hic, modi temporibus, et quo ipsa cumque eos autem ducimus nisi praesentium rerum tempore quia consequuntur laboriosam. Quia veritatis asperiores numquam ipsam sint iusto deleniti et atque hic temporibus, quisquam vero sequi omnis laborum consequuntur sit ullam expedita optio ratione animi esse cumque ipsa voluptatum! Ratione labore temporibus accusamus molestiae placeat praesentium. At magnam aliquid est aspernatur quam aliquam ducimus suscipit voluptas veritatis eaque. Qui dolore tempore eligendi, sunt eum expedita aut facere error quod explicabo repellendus odit nam accusamus debitis fugiat tenetur et aliquam amet!'
    document.getElementById('question').innerHTML='Question 1'
    document.documentElement.style.setProperty('--border-2', 'solid #FAF7FF')
    document.documentElement.style.setProperty('--border-1', 'solid hsla(0, 0, 0, 0)')
})

question2.addEventListener('click', () => {
    document.getElementById('awnser').innerHTML='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit saepe, maiores ipsum quos officia quod. Dolore molestias, eius quis expedita illum ea? Non numquam necessitatibus quia porro suscipit voluptatum, vitae expedita, sequi dolore harum deserunt! Nemo adipisci numquam natus laboriosam dicta, est saepe earum placeat in magnam blanditiis libero eum fuga alias minima, voluptatem consequatur non ipsa nobis quis ex, veniam voluptate illo. Quia repellendus eaque accusamus doloremque, reprehenderit, omnis incidunt quae dolor dicta, sequi laudantium sit nemo atque minus!'
    document.getElementById('question').innerHTML='Question 2'
    document.documentElement.style.setProperty('--border-2', 'solid hsla(0, 0, 0, 0)')
    document.documentElement.style.setProperty('--border-1', 'solid #FAF7FF')
})

//animations skills graph visible

window.addEventListener('scroll', function () {
    var bigElement = document.querySelector('.element3')
    var element1 = document.querySelector('.element1')
    var element2 = document.querySelector('.element2')
    var element3 = document.querySelector('.element3')
    var position = bigElement.getBoundingClientRect()

    if (position.top < window.innerHeight && position.bottom >= 0){
        element1.classList.add('visible')
        element2.classList.add('visible')
        element3.classList.add('visible')
    }
})

//cursor

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

let certification = document.querySelectorAll('.img');


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


