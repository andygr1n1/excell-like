// import _ from 'lodash'
import '../styles/index.css'
import { Home } from '../modules/home/home.js'
import { AboutUs } from '../modules/about-us/about-us'

const root = () => {
    const homepage = document.getElementById('index')
    const aboutUs = document.getElementById('about-us')

    homepage && Home()
    aboutUs && AboutUs()
}

root()
