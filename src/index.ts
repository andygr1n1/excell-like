import './styles/index.css'
import './styles/rotating-boxes-loading.css'
import './styles/excell-menu.scss'
import './styles/excell-table.scss'
import { Home } from './modules/home/home'
import { excellTable } from './modules/excell-table/excell-table'

const root = () => {
    const homepage = document.getElementById('homepage')
    const tablePage = document.getElementById('excell-table')
    //1. first create a new page. For example contacts.html. Then create a div with id='contacts'

    //2. now you can bind new html with js
    homepage && Home()
    tablePage && excellTable()
}

root()
