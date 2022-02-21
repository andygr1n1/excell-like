import { $ } from '@/core/dom'
import type { XcellFormula } from './components/formula/XcellFormula'
import type { XcellHeader } from './components/header/XcellHeader'
import type { XcellTable } from './components/table/XcellTable'
import type { XcellToolbar } from './components/toolbar/XcellToolbar'

export type IXcellComponents =
    | typeof XcellHeader
    | typeof XcellToolbar
    | typeof XcellFormula
    | typeof XcellTable

export type IXcellCreatedComponents =
    | XcellHeader
    | XcellToolbar
    | XcellFormula
    | XcellTable

interface IXcellOptions {
    components: IXcellComponents[]
}

export class Xcell {
    $el: Element | null | undefined
    components: IXcellComponents[] = []
    created_components: IXcellCreatedComponents[] = []

    constructor(selector: string, options: IXcellOptions) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRootNode(): Element {
        const $xcellRoot = $.create('div', '', 'xcell__root')

        this.created_components = this.components.map(
            (XcellComponent): IXcellCreatedComponents => {
                // const componentNode = document.createElement('div')

                const componentNode = $.create('div', '', '')
                const component = new XcellComponent(componentNode)
                componentNode.$el?.setAttribute('id', component.component_id)

                // DEBUG
                // if (component.name) {
                //     console.log('component.name', component.name)
                //     window[('c' + component.name) as unknown as window] =
                //         component
                // }

                // componentNode.$el.innerHTML = component.toHTML()
                componentNode.html(component.toHTML())

                $xcellRoot.append(componentNode?.$el)

                return component
            }
        )

        return $xcellRoot.$el
    }

    render() {
        this.$el?.insertAdjacentElement('beforeend', this.getRootNode())
        this.created_components.forEach((component) => component.init())
    }
}
