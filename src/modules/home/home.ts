import { button } from '../../components/button'
import styles from './home.module.scss'

export const Home = () => {
    let x
    const title = document.createElement('h1')
    const homeRoot = document.getElementById('homepage')
    const aboutUsButton = button('About us', './about.html')

    title.textContent = 'Hello Pro!'
    title.classList.add('color-title')
    homeRoot?.classList.add(styles['wrapper'])
    //
    homeRoot?.appendChild(title)
    homeRoot?.appendChild(aboutUsButton)
}
