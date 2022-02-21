import './styles/index.css'
import './styles/rotating-boxes-loading.css'
import './styles/excell-menu.scss'
import './styles/excell-table.scss'
import { Home } from './modules/home/home'
import { Xcell } from './modules/xcell/Xcell'
import { XcellHeader } from './modules/xcell/components/header/XcellHeader'
import { XcellToolbar } from './modules/xcell/components/toolbar/XcellToolbar'
import { XcellFormula } from './modules/xcell/components/formula/XcellFormula'
import { XcellTable } from './modules/xcell/components/table/XcellTable'

const root = () => {
    const homepage = document.getElementById('homepage')

    homepage && Home()
 

    const xcell = new Xcell('#xcell__table', {
        components: [XcellHeader, XcellToolbar, XcellFormula, XcellTable],
    })

    xcell.render()
}

root()
