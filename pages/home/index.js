// BOTÃO POSTAR
const postTitle = document.getElementById('post-title')
const postText = document.getElementById('post-text')
const buttonPost = document.getElementById('button-post')
buttonPost.addEventListener('click', (event) => {
    event.preventDefault()
    if(postTitle.value && postText.value) {
        insertNewPost()
        document.getElementById('post-title').value = ''
        document.getElementById('post-text').value = ''
    }
    else alert('Favor inserir um título e uma descrição ao post')
    checkNewPostContent()
})

// BOTÕES SEGUIR
const buttonFollow = document.getElementsByClassName('button-follow')
for(let i = 0; i < buttonFollow.length; i++) {
    buttonFollow[i].addEventListener('click', function() {
        console.log('oi')
        let buttonCurrent = buttonFollow[i]
        buttonCurrent.classList.toggle('button-outline')
        buttonCurrent.classList.toggle('button-primary')
        buttonCurrent.innerHTML == 'Seguir' ? buttonCurrent.innerHTML = 'Seguindo' : buttonCurrent.innerHTML = 'Seguir'
    })
}

// BOTÃO LIKE
function updateLikeButton() {
    const buttonLike = document.getElementsByClassName('icon-like')
    for(let i = 0; i < buttonLike.length; i++) {
        buttonLike[i].addEventListener('click', () => {
            let imgSrc = buttonLike[i].src
            let currentCounter = buttonLike[i].nextSibling.innerHTML
            if(imgSrc.substring(imgSrc.length-5, imgSrc.length-4) == 'e') {
                buttonLike[i].src = '../../assets/img/bt-liked.png'
                currentCounter++
            }
            else {
                buttonLike[i].src = '../../assets/img/bt-like.png'
                currentCounter--
            }
            buttonLike[i].nextSibling.innerHTML = currentCounter
        })
    }
}



postTitle.addEventListener('keyup', (event) => {    
    checkNewPostContent()
})
postText.addEventListener('keyup', (event) => {    
    checkNewPostContent()
} )


function checkNewPostContent() {
    if(postTitle.value.length > 0 && postText.value.length > 0) {
        buttonPost.classList = ' button-primary'
    }
    else if(postTitle.value.length <= 2 || postText.value.length <=2) {
        buttonPost.classList = ' button-disable'
    }
}
    
updateLikeButton()