import { button } from '../../components/button'
import styles from './home.module.scss'

export const Home = () => {
    const title = document.createElement('h1')
    const wrapper = document.createElement('div')
    const aboutUsButton = button('About us', './about.html')

    title.textContent = 'Hello Pro!'
    title.classList.add(styles['title'])
    wrapper.classList.add(styles['wrapper'])

    wrapper.appendChild(title)
    wrapper.appendChild(aboutUsButton)
    document.body.appendChild(wrapper)
}
