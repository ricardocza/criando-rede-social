function addListeners() {
    const buttonModal = document.querySelectorAll('[data-modal-control]')
    for(let i = 0; i < buttonModal.length; i++) {
        buttonModal[i].addEventListener('click', () => {
            let dataValue = buttonModal[i].getAttribute('data-modal-control')
            createModal(dataValue)
        })
    }
}

function createModal(postID) {
    let div = document.createElement('div')
    let clone = document.getElementById(postID).cloneNode(true)
    clone.children[2].remove()    
    let buttonClose = document.createElement('button') 
    buttonClose.innerText = 'X'
    div.append(clone)
    div.classList = 'modal-wrapper w-full h-full flex'
    document.querySelector('body').classList.toggle('preventScroll')
    
    let main = document.querySelector('main')
    main.append(div)    
    clone.children[1].classList += ' overflow-y'
    clone.children[1].children[0].classList.toggle('truncate')
    clone.children[1].children[1].classList.toggle('truncate')
    clone.classList = 'modal-card flex flex-column gap12 margin-modal'
    clone.children[0].classList = 'flex gap12'
    clone.append(buttonClose)
    buttonClose.classList = 'close-button'
    buttonClose.addEventListener('click', () => {
        div.remove()
        document.querySelector('body').classList.toggle('preventScroll')
    })
}

addListeners()