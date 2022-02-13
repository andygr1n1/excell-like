import type { XcellFormula } from './components/formula/XcellFormula'
import type { XcellHeader } from './components/header/XcellHeader'
import type { XcellTable } from './components/table/XcellTable'
import type { XcellToolbar } from './components/toolbar/XcellToolbar'

export type IXcellComponents =
    | typeof XcellHeader
    | typeof XcellToolbar
    | typeof XcellFormula
    | typeof XcellTable

interface IXcellOptions {
    components: IXcellComponents[]
}

export class Xcell {
    constructor(selector: string, options: IXcellOptions) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    $el: Element | null | undefined
    components: IXcellComponents[] = []

    getRootNode(): Element {
        const newNode = document.createElement('div')
        newNode.setAttribute('id', 'xcell__root')

        this.components.forEach((XcellComponent) => {
            const component = new XcellComponent()
            const componentNode = document.createElement('div')
            componentNode.setAttribute('id', component.component_id)
            componentNode.innerHTML = component.toHTML()

            newNode.appendChild(componentNode)
        })

        return newNode
    }

    render() {
        this.$el?.insertAdjacentElement('beforeend', this.getRootNode())
    }
}
