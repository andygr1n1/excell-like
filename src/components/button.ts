import styles from './button.module.scss'

export const button = (title = '', href = '') => {
    console.log(title, href)
    const button = document.createElement('button')
    const link = document.createElement('a')
    button.classList.add(styles['button'])

    button.textContent = title

    link.href = `${href}`
    link.appendChild(button)

    return link
}
