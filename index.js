const listButton = document.getElementsByClassName('content__button__rate__button')


for (const key in listButton) {
    if (Object.hasOwnProperty.call(listButton, key)) {
        const element = listButton[key];

        element.addEventListener('click', event => {

            const isEnabled = document.getElementById('content__button__rate__button__disabled')

            if (!event.target.disabled) {
                event.target.id = 'content__button__rate__button__disabled'
            }

            if (isEnabled.innerText !== event.target.innerText && !event.target.disabled) {
                isEnabled.id = ' '
                event.target.disabled = flase
                event.target.id = 'content__button__rate__button__disabled'
            }
        })
    }
}



const buttonSubmit = document.getElementById('button__submit')

buttonSubmit.addEventListener('click', () => {
    const content = document.getElementById('content')
    const thankYou = document.getElementById('thank__you')
    content.style.display = 'none'
    thankYou.style.display = 'block'

    const isEnabled = document.getElementById('content__button__rate__button__disabled')

    const message = document.getElementById('message')

    message.innerHTML = `You selected ${isEnabled.innerText} out of 5`
})