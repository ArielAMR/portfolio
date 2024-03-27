//

const switchThemeBtn = document.querySelector('.btn-toggle')
let toggleTheme = true;

switchThemeBtn.addEventListener('click', () => {

    if(toggleTheme){
        document.documentElement.style.setProperty('--main-color-1', '#000000')
        document.documentElement.style.setProperty('--secondary-color-1', '#161616')
        document.documentElement.style.setProperty('--third-color-1', '#7E3B9C')
        document.documentElement.style.setProperty('--font-color-1', '#FAF7FF')
        document.documentElement.style.setProperty('--opacity-1', '0')
        document.documentElement.style.setProperty('--opacity-2', '1')

        toggleTheme=!toggleTheme
    }else{
        document.documentElement.style.setProperty('--main-color-1', '#FFFFFF')
        document.documentElement.style.setProperty('--secondary-color-1', '#FAF7FF')
        document.documentElement.style.setProperty('--third-color-1', '#8685EF')
        document.documentElement.style.setProperty('--font-color-1', '#000000')
        document.documentElement.style.setProperty('--opacity-1', '1')
        document.documentElement.style.setProperty('--opacity-2', '0')

        toggleTheme=!toggleTheme
    }
})


//question section

const question1 = document.querySelector('.question1')
const question2 = document.querySelector('.question2')



question1.addEventListener('click', () => {
    document.getElementById('awnser').innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum porro quae fugit voluptatum hic, modi temporibus, et quo ipsa cumque eos autem ducimus nisi praesentium rerum tempore quia consequuntur laboriosam. Quia veritatis asperiores numquam ipsam sint iusto deleniti et atque hic temporibus, quisquam vero sequi omnis laborum consequuntur sit ullam expedita optio ratione animi esse cumque ipsa voluptatum! Ratione labore temporibus accusamus molestiae placeat praesentium. At magnam aliquid est aspernatur quam aliquam ducimus suscipit voluptas veritatis eaque. Qui dolore tempore eligendi, sunt eum expedita aut facere error quod explicabo repellendus odit nam accusamus debitis fugiat tenetur et aliquam amet!'
})

question2.addEventListener('click', () => {
    document.getElementById('awnser').innerHTML='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit saepe, maiores ipsum quos officia quod. Dolore molestias, eius quis expedita illum ea? Non numquam necessitatibus quia porro suscipit voluptatum, vitae expedita, sequi dolore harum deserunt! Nemo adipisci numquam natus laboriosam dicta, est saepe earum placeat in magnam blanditiis libero eum fuga alias minima, voluptatem consequatur non ipsa nobis quis ex, veniam voluptate illo. Quia repellendus eaque accusamus doloremque, reprehenderit, omnis incidunt quae dolor dicta, sequi laudantium sit nemo atque minus!'
})
