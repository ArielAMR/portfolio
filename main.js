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