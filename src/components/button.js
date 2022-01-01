import './button.css'

export const button = (title = '', href = '') => {
    console.log(title, href)
    const button = document.createElement('button')
    const link = document.createElement('a')
    button.classList.add('button')

    button.textContent = title

    link.href = `${href}`
    link.appendChild(button)

    return link
}
