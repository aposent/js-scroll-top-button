const header_height = document.querySelector('header').clientHeight
const button = document.querySelector('button')

window.addEventListener('scroll', showHideButton)

function showHideButton() {
    console.log(window.scrollY)
    if (window.scrollY > header_height) {
        button.classList.add('active')
    } else {
        button.removeAttribute('class')
    }
}

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})

