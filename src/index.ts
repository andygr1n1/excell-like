import './styles/index.css'
import { Home } from './modules/home/home'
import { AboutUs } from './modules/about-us/about-us'

const root = () => {
    const homepage = document.getElementById('homepage')
    const aboutUs = document.getElementById('about-us')
    //1. first create a new page. For example contacts.html. Then create a div with id='contacts'

    //2. now you can bind new html with js
    homepage && Home()
    aboutUs && AboutUs()
}

root()
