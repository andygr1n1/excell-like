import { button } from '../../components/button'
import styles from './about-us.module.scss'

export const AboutUs = () => {
    const andygr1n1 = document.createElement('h1')
    const wrapper = document.createElement('div')

    const aboutUsButton = button('return to homepage', './index.html')

    andygr1n1.classList.add(styles.h1)

    wrapper.classList.add(styles['wrapper'])

    andygr1n1.textContent = 'andygr1n1'
    wrapper.appendChild(andygr1n1)
    wrapper.appendChild(aboutUsButton)
    document.body.appendChild(wrapper)
}
