const container = document.querySelector('[data-js="containerSkills"]')
const buttons = document.querySelectorAll('.botao')
const imagens = [...document.getElementsByTagName('figure')]


const hideButton = (display) => {
    buttons.forEach(button => {
        button.style.display = `${display}`
    })
}

const hideButtonsOnLargeScreen = () => {
    window.addEventListener('resize', () => {
        if(window.innerWidth >= 768){
            hideButton('none')
            return
        }
            hideButton('block')
    })
}



let count = 0;

const addclickButtons = () => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.dataset.js === 'prev' ? -1 : 1
            const value = container.clientWidth * direction
            container.scrollBy(value, 0)
        })
    })
}

// getMesures()
addclickButtons()
hideButtonsOnLargeScreen()


