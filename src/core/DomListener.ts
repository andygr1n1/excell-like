import _ from 'lodash'
import { Dom } from './dom'
import { IEventHandlerNameENUM } from './types'

export class DomListener {
    $root: Dom
    listeners: string[]

    constructor($root: Dom, listeners: string[] = []) {
        this.$root = $root
        this.listeners = listeners
    }

    onInput(event: Event) {
        console.log('constructor input')
    }

    onClick(event: Event) {
        console.log('constructor click')
    }

    initDomListeners() {
        this.listeners.forEach((listener) => {
            const action: IEventHandlerNameENUM | undefined =
                createActionTitle(listener)

            if (!action) return

            this.$root.on(listener, this[action].bind(this))
            console.log('this:::', this)
        })
    }

    removeDomListeners() {
        console.log('listent to', this.listeners)
    }
}

function createActionTitle(
    listener: string
): IEventHandlerNameENUM | undefined {
    const result = `on${_.capitalize(listener)}`
    if (result in IEventHandlerNameENUM)
        return result as unknown as IEventHandlerNameENUM
}
