let currentPostList = []
let likeCounter = 0

function updatePostList(post) {
    if(currentPostList.length == 0) {
       currentPostList = currentPostList.concat(posts)
       renderPostList()
    }
    else {
        let newPost = post
        currentPostList.push(newPost)
        removeOldList()
        renderPostList()
    }
}

function insertNewPost() {
    let newPost = {}
    newPost.id_post = posts.length + 1 
    newPost.user = 0        //Id do usuário conectado atualmente
    newPost.title = document.getElementById('post-title').value
    newPost.text = document.getElementById('post-text').value
    updatePostList(newPost)
    updateLikeButton()

    addListeners()
}

function removeOldList() {
    let oldList = document.getElementsByClassName('posts-list')[0]
    for(let i = oldList.children.length -1 ; i >= 0 ; i--) {
        oldList.children[i].remove()        
    }
}

function renderPostList() {
    for(let i = currentPostList.length-1; i >= 0; i--) {
        let currentPost = currentPostList[i]
        let userID = currentPost.user
        let li = document.createElement('li')
        li.id = `post-${i+1}`
        li.classList = 'flex flex-column gap20'

        let userDiv = document.createElement('div')
        userDiv.classList = 'user'
        let userDivImg = document.createElement('div')
        userDivImg.classList = 'user-img image-size'
        let userImg = document.createElement('img')
        userImg.src = users[userID].img 
        userDivImg.append(userImg)
        let userDivInfo = document.createElement('div')
        userDivInfo.classList = 'user-info'
        let h2 = document.createElement('h2')
        h2.classList = 'title2'
        h2.innerText = users[userID].user
        let userTitle = document.createElement('p')
        userTitle.classList = 'text2'
        userTitle.innerText = users[userID].stack
        userDivInfo.append(h2, userTitle)
        userDiv.append(userDivImg, userDivInfo)

        let userDivPost = document.createElement('div')
        userDivPost.classList = 'user-post flex flex-column gap12'
        let h3 = document.createElement('h3')
        h3.classList = 'title1 truncate title-truncate'
        h3.innerText = currentPost.title
        let post = document.createElement('p')
        post.classList = 'text1 truncate text-truncate'
        post.innerText = currentPost.text
        userDivPost.append(h3, post)
        let buttonsDiv = document.createElement('div')
        buttonsDiv.classList = 'post-buttons flex align-center gap20'
        let buttonModal = document.createElement('button')
        buttonModal.classList = 'button-grey1'
        buttonModal.dataset.modalControl = `post-${i+1}`
        buttonModal.innerText = 'Abrir Post'
        let buttonLike = document.createElement('button')
        buttonLike.classList = 'button-like flex align-center gap12'
        let buttonLikeImg = document.createElement('img')
        buttonLikeImg.src = '../../assets/img/bt-like.png'
        buttonLikeImg.classList = 'icon-like'
        buttonLikeImg.style.cursor = 'pointer'
        let buttonLikeCounter = document.createElement('p')
        buttonLikeCounter.classList = 'like-counter'
        buttonLikeCounter.innerText = `${likeCounter}`
        buttonLike.append(buttonLikeImg, buttonLikeCounter)
        buttonsDiv.append(buttonModal, buttonLike)
        
        li.append(userDiv, userDivPost, buttonsDiv)
        const sectionPosts = document.querySelector('.posts-list')
        sectionPosts.append(li)
        
    }
}

updatePostList()