//BOTÃO DE RETORNAR PARA LOGIN

const regButton = document.getElementsByClassName('return-button')
for(let i in regButton){
    regButton[i].addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = '../../index.html'
    })

}