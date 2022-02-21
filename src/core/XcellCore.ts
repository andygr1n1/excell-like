import { Dom } from './dom'
import { DomListener } from './DomListener'
import { IComponentOptions } from './types'

export class XcellCore extends DomListener {
    component_id = ''
    name = ''

    constructor($root: Dom, options: IComponentOptions = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }

    toHTML() {
        return ''
    }

    init() {
        this.initDomListeners()
    }

    destroy() {
        this.removeDomListeners()
    }
    
}
