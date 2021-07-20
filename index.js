const foreground = document.querySelector('.foreground')
const menu = document.querySelector('.menu')
const mainImage = document.querySelector('.main-image')
const musicPlayerBox = document.querySelector('.music-player-box')

function animateElements() {
  foreground.classList.add('foreground__small')
  menu.classList.add('menu__small')
  mainImage.classList.add('main-image__small')
  musicPlayerBox.classList.add('music-player-box__small')
}

menu.addEventListener('click', animateElements)