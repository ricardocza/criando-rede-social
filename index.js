//BOTÃO DE REGISTRO

const regButton = document.getElementById('register-button')
regButton.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = 'https://ricardocza.github.io/criando-rede-social/pages/register/index.html'
})

//BOTÃO LOGAR

const loginButton = document.getElementById('login-button')
loginButton.addEventListener('click', (e) => {
    e.preventDefault()
    let login = document.getElementById('email').value
    let password = document.getElementById('password').value
    console.log(login)

    if(login && password) window.location.href = 'https://ricardocza.github.io/criando-rede-social/pages/home/index.html'
})