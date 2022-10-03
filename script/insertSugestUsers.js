function renderSugestedUsers(arr) {
  arr.forEach(element => {
    const sugestionDiv = document.createElement('li')
    
    const userDivWrapper = document.createElement('div')
    userDivWrapper.classList = 'sugestion-list-item w-max-content li-sugestion-desktop'
    const userDiv = document.createElement('div')
    userDiv.classList = 'flex gap12 margin-bottom12 w-full'

    let userImgSrc = users[element].img
    const userImgDiv = createDivImg(userImgSrc)

    let userName = users[element].user
    const userNameDiv = createUserDiv(userName)
    
    const userTitle = document.createElement('p')
    userTitle.classList = 'text2'
    userTitle.innerText = users[element].stack
    userNameDiv.append(userTitle)
    userDiv.append(userImgDiv, userNameDiv)
    userDivWrapper.append(userDiv, createButtonFollow())
    sugestionDiv.append(userDivWrapper)
    document.getElementById('sugestion-list').append(sugestionDiv)    
  });
}

function createDivImg(imgSrc) {

  const userImgDiv = document.createElement('div')
  const userImg = document.createElement('img')
  userImg.src = imgSrc
  userImgDiv.classList = 'image-size'
  userImgDiv.append(userImg)
  return userImgDiv
}

function createUserDiv(name) {
  const userNameDiv = document.createElement('div')
  userNameDiv.classList = 'user-info'
  const userName = document.createElement('h2')
  userName.innerText = name
  userName.classList = 'title2'
  userNameDiv.append(userName)
  return userNameDiv
  
}

function createButtonFollow() {
  const button = document.createElement('button')
  button.classList = 'button-follow button-outline margin-bottom12'
  button.innerText = 'Seguir'
  return button
}

renderSugestedUsers(sugestUsers)