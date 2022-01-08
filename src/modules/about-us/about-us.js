import { button } from '../../components/button'
import styles from './about-us.module.scss'

export const AboutUs = () => {
    const andygr1n1 = document.createElement('h1')
    const aboutUsRoot = document.getElementById('about-us')

    const aboutUsButton = button('return to homepage', './index.html')

    aboutUsRoot.classList.add(styles['wrapper'])

    andygr1n1.textContent = 'andygr1n1'
    andygr1n1.classList.add(
        'color-title',
        'border',
        'border-gray-200',
        'p-4',
        'hover:animate-pulse'
    )
    aboutUsRoot.appendChild(andygr1n1)
    aboutUsRoot.appendChild(aboutUsButton)
}
